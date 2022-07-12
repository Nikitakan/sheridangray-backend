const mongoose = require("mongoose");

const ingredientSchema=new mongoose.Schema({
  ingredient:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    },
    qType:{
        type:String
    }
})

const preparationSchema=new mongoose.Schema({
  info:{
        type:String,
        required: true
    },
    step:{
        type:Number,
        required:true
    }
})


const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients:[ingredientSchema],
  preparation:[preparationSchema],
  
  servingSize:{
    type: Number,
    // required: true
  },
  prepTime:{
    type: String,
    default: null
  },
  cookTime:{
    type: String,
    default: null
  },
  totalTime:{
    type: String,
    default: null
  },
  categories:[{ type : mongoose.Types.ObjectId, ref: 'categories' }],
  visibility:{
    type: String,
    default:1
  },
  image:{
    type: String
  }
},{
  timestamps: true
});

const recipe = mongoose.model("recipe", recipeSchema);

module.exports = recipe;