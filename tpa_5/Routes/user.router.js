const express = require("express");
const router = express.Router();

const {
    getAllUser,
    getUserByID,
    registerUser,
    deleteUserByID,
    updateUserByID
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/register", registerUser);
router.delete("/:id", deleteUserByID);
router.patch("/:id", updateUserByID);

module.exports = router;