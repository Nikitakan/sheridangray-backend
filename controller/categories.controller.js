const CategoryModel = require("../model/categories.model");
const { sendResponse } = require("../helpers/requestHandler.helper");

exports.addCategory = async (req, res, next) => {
  try {
    await CategoryModel.create(req.validated);
    return sendResponse(res, true, 200, "categories added");
  } catch (error) {
    next(error);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await CategoryModel.findById(req.validated.id);
    return sendResponse(res, true, 200, "category", category);
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    await CategoryModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    return sendResponse(res, true, 200, "category updated");
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    await CategoryModel.findByIdAndDelete(req.validated.id);
    return sendResponse(res, true, 200, "category deleted");
  } catch (error) {
    next(error);
  }
};


exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await CategoryModel.find({});
    return sendResponse(res, true, 200, "categories", categories);
  } catch (error) {
    next(error);
  }
};