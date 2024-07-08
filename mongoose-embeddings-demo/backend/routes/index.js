const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  deleteCountry,
  addCountryToUser,
} = require("../controller/userController.js");

const router = express.Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUserById).delete(deleteUser).put(addCountryToUser);

router.route("/:userId/countries/:countryId").delete(deleteCountry);

module.exports = router;
