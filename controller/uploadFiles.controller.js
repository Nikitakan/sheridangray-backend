const {sendResponse}=require("../helpers/requestHandler.helper")

exports.uploadImage = async (req, res, next) => {
    try {
        return sendResponse(res, true, 200, "Image uploaded",req.file);
    } catch (error) {
        next(error);
    }
}