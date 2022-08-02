const express = require("express");
const router = express.Router();
const {
  addCategoryValidation,
} = require("../validationSchema/categories-schema");
const { isIdValidation } = require("../validationSchema/isId-schema");
const {
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
} = require("../controller/categories.controller");

router.post("/", addCategoryValidation, addCategory);
router.get("/:id", isIdValidation, getCategory);
router.put("/:id", isIdValidation, updateCategory);
router.delete("/:id", isIdValidation, deleteCategory);
router.get("/all/categories", getAllCategories);

module.exports = router;
