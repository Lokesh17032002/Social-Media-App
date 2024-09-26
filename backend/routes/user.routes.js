import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { getUserProfile } from '../controllers/user.controller.js';
import { followUnfollowUser } from '../controllers/user.controller.js';


const router = express.Router() ;

//all of these should be protected b/c if not authenticated then cant update profile, cant follow or unfollow etc
router.get("/profile/:username", protectRoute, getUserProfile) ;
// router.get("/suggested", protectRoute, getUserProfile) ;
router.post("/follow/:id", protectRoute, followUnfollowUser) ;
// router.post("/update", protectRoute, updateUserProfile) ;

export default router ; 