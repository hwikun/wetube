import express from "express";
import routes from "../routes";
import {
    videos,
    video_detail,
    edit_video,
    getUpload,
    postUpload,
    delete_video
} from "../controllers/videocontroller";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.editVideo, edit_video);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.deleteVideo, delete_video);
videoRouter.get(routes.videoDetail(), video_detail);

export default videoRouter;
