const {sendResponse}=require("../helpers/requestHandler.helper")
const {APP_URL} = require("../config/app.config")
exports.uploadImage = async (req, res, next) => {
    try {
        return sendResponse(res, true, 200, "Image uploaded",APP_URL+"/"+req.file.filename);
    } catch (error) {
        next(error);
    }
}