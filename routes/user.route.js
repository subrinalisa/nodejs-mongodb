const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
