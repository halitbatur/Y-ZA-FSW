const User = require("../models/userModel.js");

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get a single user by ID
// @route   GET /api/users/:id
// @access  Public
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new user
// @route   POST /api/users
// @access  Public
const createUser = async (req, res) => {
  try {
    const { name, email, countryWishList } = req.body;
    const user = new User({ name, email, countryWishList });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a user by ID
// @route   DELETE /api/users/:id
// @access  Public
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete a country from a user's wish list
// @route   DELETE /api/users/:userId/countries/:countryId
// @access  Public
const deleteCountry = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user) {
      user.countryWishList.id(req.params.countryId).remove();
      await user.save();
      res.json({ message: "Country removed from wish list" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Add a country to a user's wish list
// @route   PUT /api/users/:userId/countries
// @access  Public
const addCountryToUser = async (req, res) => {
  try {
    console.log(req.params);
    const user = await User.findById(req.params.id);
    if (user) {
      const newCountry = req.body;
      console.log(newCountry);
      user.countryWishList.push(newCountry);
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  deleteCountry,
  addCountryToUser,
};
