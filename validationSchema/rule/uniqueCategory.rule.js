const CategoryModel = require("../../model/categories.model");

module.exports.uniqueCategory = async (value) => {
  let result = await CategoryModel.countDocuments({ name: value });

  return result > 0 ? false : true;
};
