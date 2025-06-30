const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.index = async (req, res, next) => {
  try {
    const { category, q } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (q) {
      const regex = new RegExp(q, "i");
      query.$or = [
        { title: regex },
        { description: regex },
        { location: regex },
        { country: regex },
      ];
    }

    const allListing = await Listing.find(query);
    res.render("listings/index", { allListing, category, q });
  } catch (err) {
    next(err);
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listing");
  }
  res.render("listings/show", { listing });
};

module.exports.createListing = async (req, res) => {
  const { listing } = req.body;
  const newListing = new Listing({
    ...listing,
    owner: req.user._id,
    image: {
      url: req.file.path,
      filename: req.file.filename,
    },
  });
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listing");
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  let originalImage = listing.image?.url || "";

  if (originalImage.includes("/upload")) {
    originalImage = originalImage.replace(
      "/upload",
      "/upload/w_300,h_200,blur:300"
    );
  }

  res.render("listings/edit", { listing, originalImage });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, req.body.listing);
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listing/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listing");
};

module.exports.category = async (req, res) => {
  const { category } = req.query;
  let listings;

  if (category) {
    listings = await Listing.find({ category });
  } else {
    listings = await Listing.find({});
  }

  res.render("listings/index", { listings, category });
};
