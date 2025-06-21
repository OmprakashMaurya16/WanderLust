const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL =
  "mongodb+srv://omprakashmaurya1604:Maurya2005@wanderlust.dw8uq0b.mongodb.net/WanderLust";

main()
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => console.log(`Error : ${err}`));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
