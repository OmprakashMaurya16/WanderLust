const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const app = express();
const PORT = 3000;
const MONGO_URL =
  "mongodb+srv://omprakashmaurya1604:Maurya2005@wanderlust.dw8uq0b.mongodb.net/WanderLust";

// Set view engine and middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// MongoDB connection
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log(`Database Connection Error: ${err}`));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to WanderLust");
});

app.get("/listing", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index", { allListing });
});

app.get("/listing/new", (req, res) => {
  res.render("listings/new");
});

app.post(
  "/listing",
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listing");
  })
);

app.get("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show", { listing });
});

app.get("/listing/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit", { listing });
});

app.put("/listing/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body.listing);
  res.redirect(`/listing/${id}`);
});

app.delete("/listing/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listing");
});

// Catch-all 404 handler
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// Central error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).send(message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
