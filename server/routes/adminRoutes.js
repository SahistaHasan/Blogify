import e from "express";
import { adminLogin } from "../controllers/adminController.js";

const adminRouter = e.Router();

adminRouter.post("/login",adminLogin);
export default adminRouter;