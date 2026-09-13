import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import {uploaad} from "../middlewares/multer.middleware.js";


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxcount: 1
        },
        {
            name: "coeverImage",
            maxCount: 1
        }
    ]),
    registerUser
)


export default router