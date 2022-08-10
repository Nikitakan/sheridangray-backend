const MealPlannerModel = require("../model/meal-planner.model");
const { sendResponse } = require("../helpers/requestHandler.helper");
let {
  Types: { ObjectId },
} = require("mongoose");
const SubCategoryModel = require("../model/sub-categories.model");
const CategoryModel = require("../model/categories.model");
const RecipeModel = require("../model/recipe.model");

exports.addMeal = async (req, res, next) => {
  try {
    await MealPlannerModel.create(req.body);
    return sendResponse(res, true, 200, "added");
  } catch (error) {
    next(error);
  }
};

exports.getMealByDate = async (req, res, next) => {
  try {
    const dateFilter = {
      $gte: new Date(req.query.startDate),
      $lte: new Date(req.query.endDate),
    };
    // make blue print for aggregation 
    const recipeLookup = {
      from: RecipeModel.collection.name,
      localField: "recipeId",
      foreignField: "_id",
      as: "recipe",
    };
    const categoryLookup = {
      from: CategoryModel.collection.name,
      localField: "categoryId",
      foreignField: "_id",
      as: "category",
    };
    const unwindRecipe = {
      path: "$recipe",
      preserveNullAndEmptyArrays: true,
    };
    const unwindCategory = {
      path: "$category",
      preserveNullAndEmptyArrays: true,
    };
    const project = {
      "recipe.ingredients": 0,
      "recipe.preparation": 0,
      "recipe.servingSize": 0,
      "recipe.prepTime": 0,
      "recipe.cookTime": 0,
      "recipe.totalTime": 0,
      "recipe.categories": 0,
      "recipe.subCategory": 0,
      "recipe.visibility": 0,
      "category.subCategories": 0,
    };
    const breakFastMeals = await MealPlannerModel.aggregate([
      {
        $match: {
          date: dateFilter,
          categoryId: ObjectId("62ed23e1bffea75a4ba6a511"),
        },
      },
      {
        $lookup: recipeLookup,
      },
      {
        $lookup: categoryLookup,
      },
      {
        $unwind: unwindRecipe,
      },
      {
        $unwind: unwindCategory,
      },
      {
        $project: project,
      },
    ]);

    const lunchMeals = await MealPlannerModel.aggregate([
        {
          $match: {
            date: dateFilter,
            categoryId: ObjectId("62ed23fdbffea75a4ba6a514"),
          },
        },
        {
          $lookup: recipeLookup,
        },
        {
          $lookup: categoryLookup,
        },
        {
          $unwind: unwindRecipe,
        },
        {
          $unwind: unwindCategory,
        },
        {
          $project: project,
        },
      ]);
      const dinnerMeals = await MealPlannerModel.aggregate([
        {
          $match: {
            date: dateFilter,
            categoryId: ObjectId("62ed2410bffea75a4ba6a517"),
          },
        },
        {
          $lookup: recipeLookup,
        },
        {
          $lookup: categoryLookup,
        },
        {
          $unwind: unwindRecipe,
        },
        {
          $unwind: unwindCategory,
        },
        {
          $project: project,
        },
      ]);
    data={breakFastMeals,lunchMeals,dinnerMeals}
    return sendResponse(res, true, 200, "meals", data);
  } catch (error) {
    next(error);
  }
};

// exports.getRecipe = async (req, res, next) => {
//   try {
//     const recipe = await RecipeModel.findById(req.validated.id);
//     return sendResponse(res, true, 200, "recipe", recipe);
//   } catch (error) {
//     next(error);
//   }
// };

exports.updateMeal = async (req, res, next) => {
  try {
    await MealPlannerModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    return sendResponse(res, true, 200, "meal updated");
  } catch (error) {
    next(error);
  }
};

exports.deleteMeal = async (req, res, next) => {
  try {
    await MealPlannerModel.findByIdAndDelete(req.params.id);
    return sendResponse(res, true, 200, "meal deleted");
  } catch (error) {
    next(error);
  }
};

// exports.getCategoriesRecipes = async (req, res, next) => {
//   try {
//     const recipes = await RecipeModel.aggregate([
//       {
//         $match: {
//           categories: { $in: [ObjectId(req.params.id)] },
//         },
//       },
//     ]);
//     return sendResponse(res, true, 200, "recipe", recipes);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.getSubCategoriesRecipes = async (req, res, next) => {
//   try{
//     const recipes = await RecipeModel.aggregate([
//       {
//         $match: {
//           subCategory: { $in: [ObjectId(req.params.id)] },
//         },
//       },
//     ]);
//     return sendResponse(res, true, 200, "recipe", recipes);
//   }catch (error) {
//     next(error);
//   }
// }
