const express = require("express");
const router = express.Router();
const {
  addRecipeValidation,
  isIdValidation,
  updateRecipeValidation,
} = require("../validationSchema/recipe-schema");
const {
  addRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  getCategoriesRecipes,
} = require("../controller/recipe.controller");

router.post("/", addRecipeValidation, addRecipe);
router.get("/:id", isIdValidation, getRecipe);
router.put("/:id", isIdValidation, updateRecipeValidation, updateRecipe);
router.delete("/:id", isIdValidation, deleteRecipe);
router.post("/getCategoriesRecipes/:id", isIdValidation, getCategoriesRecipes);

module.exports = router;
