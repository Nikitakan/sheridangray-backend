const express = require("express");
const router = express.Router();
const {
    addSubCategoryValidation,
    updateSubCategoryValidation
} = require("../validationSchema/subCategories-schema");
const { isIdValidation } = require("../validationSchema/recipe-schema");
const {
  addSubCategory,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getAllSubCategories,
} = require("../controller/subCategories.controller");

router.post("/", addSubCategoryValidation, addSubCategory);
router.get("/:id", isIdValidation, getSubCategory);
router.put("/:id", isIdValidation,updateSubCategoryValidation, updateSubCategory);
router.delete("/:id", isIdValidation, deleteSubCategory);
router.get("/all/subCategories", getAllSubCategories);

module.exports = router;
