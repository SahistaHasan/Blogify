import e from "express";
import { adminLogin } from "../controllers/adminController.js";
import { addBlog, deleteBlogById, getAllBlogs, getBlogById, publishToggle } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";

const adminRouter = e.Router();

adminRouter.post("/login",adminLogin);


adminRouter.post('/add',upload.single('image'),addBlog);
adminRouter.get('/all',getAllBlogs)
adminRouter.get('/:blogId',getBlogById)
adminRouter.delete('/delete',deleteBlogById)
adminRouter.post('/publish-toggle',publishToggle)

export default adminRouter;