const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./models/listing.js");
const { redirect } = require("express/lib/response.js");
const ejs_mate = require("ejs-mate");

const app = express();
const PORT = 8900;
const MONGO_URL =
  "mongodb+srv://omprakashmaurya1604:Maurya2005@wanderlust.dw8uq0b.mongodb.net/WanderLust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.engine("ejs", ejs_mate);

main()
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => console.log(`Error : ${err}`));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Welcome to WanderLust");
});

app.get("/listing", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
});

app.get("/listing/new", (req, res) => {
  res.render("listings/new.ejs");
});

app.get("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

app.post("/listing", async (req, res) => {
  let newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listing");
});

app.get("/listing/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

app.put("/listing/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listing/${id}`);
});

app.delete("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listing");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
