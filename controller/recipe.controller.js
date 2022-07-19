const RecipeModel = require("../model/recipe.model");
const { sendResponse } = require("../helpers/requestHandler.helper");
let { Types: { ObjectId } } = require("mongoose");

exports.addRecipe = async (req, res, next) => {
  try {
    await RecipeModel.create(req.validated);
    return sendResponse(res, true, 200, "recipe added");
  } catch (error) {
    next(error);
  }
};

exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await RecipeModel.findById(req.validated.id);
    return sendResponse(res, true, 200, "recipe", recipe);
  } catch (error) {
    next(error);
  }
};

exports.updateRecipe = async (req, res, next) => {
  try {
    await RecipeModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    return sendResponse(res, true, 200, "recipe updated");
  } catch (error) {
    next(error);
  }
};

exports.deleteRecipe = async (req, res, next) => {
  try {
    await RecipeModel.findByIdAndDelete(req.validated.id);
    return sendResponse(res, true, 200, "recipe deleted");
  } catch (error) {
    next(error);
  }
};

exports.getCategoriesRecipes = async (req, res, next) => {
  try {
    const recipes = await RecipeModel.aggregate([
      {
        $match: {
          categories: { $in: [ObjectId(req.params.id)] },
        },
      },
    ]);
    return sendResponse(res, true, 200, "recipe", recipes);
  } catch (error) {
    next(error);
  }
};


exports.getSubCategoriesRecipes = async (req, res, next) => {
  try{
    const recipes = await RecipeModel.aggregate([
      {
        $match: {
          subCategory: { $in: [ObjectId(req.params.id)] },
        },
      },
    ]);
    return sendResponse(res, true, 200, "recipe", recipes);
  }catch (error) {
    next(error);
  }
}