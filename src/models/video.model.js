import mongoose, {Schema} from "mongoose";
import mmongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: string,
            required: true
        },
        tumbnail: {
            type: string,
            required: true
        },
         title: {
            type: string,
            required: true
        },
         description: {
            type: string,
            required: true
        },
         duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)


video.plugin(mmongooseAggregatePaginate)

export const video = mongoose.model("video", videoSchema)