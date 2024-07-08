const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  street: String,
  city: String,
  country: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  countryWishList: [countrySchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
