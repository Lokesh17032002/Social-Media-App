// web framework using to create routes and handle HTTP requests in Node.js.
import express from "express"; //web framework you’re using to create routes and handle HTTP requests in Node.js.
import { signup } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
import { getMe } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router(); //It is used to create a modular set of route handlers.

router.get("/me", protectRoute ,getMe) ;

router.post("/signup", signup); //The first argument is the path string (like "/signup", "/login"). //The second argument is a function (like signup, login) that will handle the request.

router.post("/login", login); //The post() method is used for handling POST requests (e.g., sending data such as a signup form or login credentials).

router.get("/logout", logout); //The get() method is used for handling GET requests (e.g., retrieving data or performing simple actions like logging out).

export default router;
