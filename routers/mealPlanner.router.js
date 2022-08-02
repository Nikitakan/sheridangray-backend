const express = require("express");
const router = express.Router();
const {
 addMeal,
 getMealByDate,
 updateMeal,
 deleteMeal
} = require("../controller/mealPlanner.controller");

const {isIdValidation} = require("../validationSchema/isId-schema")

const {addMealValidation} = require("../validationSchema/mealPlanner-schema")

router.post("/", addMealValidation,addMeal);
router.put("/:id",isIdValidation,updateMeal);
router.delete("/:id",isIdValidation,deleteMeal);
router.post("/getMealsByDate", getMealByDate);

    
module.exports = router;
