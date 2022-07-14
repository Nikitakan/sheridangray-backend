const SubCategoryModel = require("../../model/sub-categories.model");

module.exports.uniqueSubCategory = async (value) => {
  let result = await SubCategoryModel.countDocuments({ name: value });

  return result > 0 ? false : true;
};
