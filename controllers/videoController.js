import "../db";
import routes from "../routes";
// globalRouter
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
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

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail());
};
export const delete_video = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
