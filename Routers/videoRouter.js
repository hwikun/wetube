import express from "express";
import routes from "../routes";
import {
  videos,
  video_detail,
  edit_video,
  upload,
  delete_video
} from "../controllers/videocontroller";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.videoDetail, video_detail);
videoRouter.get(routes.editVideo, edit_video);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.deleteVideo, delete_video);

export default videoRouter;
