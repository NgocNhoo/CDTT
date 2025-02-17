import express from "express";
import { updateUser, deleteUser, getUser, getUsers, createUser, getUserBookingHistory } from "../controllers/user.js";
import { verifyAdmin,verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();
//GET ALL

router.get("/", verifyAdmin, getUsers);
//CREATE
router.post("/", createUser);
//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

// GET USER BOOKING HISTORY 
router.get("/:id/booking-history", verifyUser, getUserBookingHistory);


export default router;
