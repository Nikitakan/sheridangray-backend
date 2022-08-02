const mongoose = require("mongoose");

const mealPlannerSchema = new mongoose.Schema({
    day: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    recipeId: {
      type:mongoose.Types.ObjectId, ref: 'recipe' ,
      required: true,
    },
    categoryId:{
      type:mongoose.Types.ObjectId, ref: 'categories' ,
      required:true
    }
    },{
      timestamps: true
    });

const mealPlanner = mongoose.model("mealPlanner", mealPlannerSchema);

module.exports = mealPlanner;

