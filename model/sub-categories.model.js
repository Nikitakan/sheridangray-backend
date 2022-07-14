const mongoose = require("mongoose");


const subCategoriesSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },{
    timestamps: true
  });
  

const subCategories = mongoose.model("subCategorie", subCategoriesSchema);

module.exports = subCategories;