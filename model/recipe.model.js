const mongoose = require("mongoose");

const ingredientSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    },
    quantity:{
        type:String
    }
})

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients:[ingredientSchema],
  preparation:{
    type: Array,
    // required: true
  },
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