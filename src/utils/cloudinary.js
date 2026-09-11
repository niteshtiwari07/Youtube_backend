import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudninary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: proess.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});