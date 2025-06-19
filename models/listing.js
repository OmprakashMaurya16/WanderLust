const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/3d-render-of-luxury-hotel-lobby-and-reception-_bb0_-t-hEo",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/3d-render-of-luxury-hotel-lobby-and-reception-_bb0_-t-hEo"
        : v,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
