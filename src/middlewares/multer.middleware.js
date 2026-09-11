import multer from "multer";

const storage = multer.diskStoraeg({
    destination: function(req, file, cb){
        cb(null, '/tmp/my-uploads')
    },
    filename: function(req, file,cb){

        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})