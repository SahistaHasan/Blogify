import e from "express";
import { adminLogin } from "../controllers/adminController.js";
import { addBlog, addComment, approveCommentById, deleteBlogById, deleteCommentById, getAllBlogs, getAllBlogsAdmin, getAllComments, getBlogById, getBlogComment, getDashboard, publishToggle } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const adminRouter = e.Router();

adminRouter.post("/login",adminLogin);


adminRouter.post('/add',upload.single('image'),auth,addBlog);
adminRouter.get('/blogs',getAllBlogs)
adminRouter.post('/delete',auth,deleteBlogById)
adminRouter.post('/publish-toggle',auth,publishToggle)
adminRouter.post('/addComment',addComment);
adminRouter.post('/comments',getBlogComment);
adminRouter.get('/allblogs',auth, getAllBlogsAdmin)
adminRouter.post('/delete-comment',auth,deleteCommentById)
adminRouter.post('/approve-comment',auth,approveCommentById)
adminRouter.get('/dashboard',auth, getDashboard)
adminRouter.get('/allComments',getAllComments);
adminRouter.get('/:blogId',getBlogById)


export default adminRouter;