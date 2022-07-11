const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
},{
  timestamps: true
});

const categories = mongoose.model("categorie", categoriesSchema);

module.exports = categories;