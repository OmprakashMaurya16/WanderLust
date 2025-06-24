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
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format"
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
