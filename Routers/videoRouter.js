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

const videoRouter = express.Router();

videoRouter.get(routes.editVideo, edit_video);
videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, postUpload);
videoRouter.get(routes.deleteVideo, delete_video);
videoRouter.get(routes.videoDetail(), video_detail);

export default videoRouter;
