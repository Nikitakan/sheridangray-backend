const SubCategoryModel = require("../model/sub-categories.model");
const { sendResponse } = require("../helpers/requestHandler.helper");

exports.addSubCategory = async (req, res, next) => {
  try {
    await SubCategoryModel.create(req.validated);
    return sendResponse(res, true, 200, "sub-category added");
  } catch (error) {
    next(error);
  }
};

exports.getSubCategory = async (req, res, next) => {
  try {
    const subCategory = await SubCategoryModel.findById(req.validated.id);
    return sendResponse(res, true, 200, "sub-category", subCategory);
  } catch (error) {
    next(error);
  }
};

exports.updateSubCategory = async (req, res, next) => {
  try {
    await SubCategoryModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    return sendResponse(res, true, 200, "sub-category updated");
  } catch (error) {
    next(error);
  }
};

exports.deleteSubCategory = async (req, res, next) => {
  try {
    await SubCategoryModel.findByIdAndDelete(req.validated.id);
    return sendResponse(res, true, 200, "sub-category deleted");
  } catch (error) {
    next(error);
  }
};


exports.getAllSubCategories = async (req, res, next) => {
  try {
    const subCategories = await SubCategoryModel.find({});
    return sendResponse(res, true, 200, "all sub-categories", subCategories);
  } catch (error) {
    next(error);
  }
};