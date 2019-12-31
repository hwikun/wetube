import Video from "../models/Video";
import routes from "../routes";
// globalRouter
export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};
export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy: searchingBy });
};

// videoRouter
export const video_detail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const edit_video = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
};
export const delete_video = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
