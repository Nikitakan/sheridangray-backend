module.exports = function (app) {
  app.use("/recipe", require("./recipe.router"));
  app.use("/subCategory",require("./subCategories.router"))
  app.use("/category", require("./categories.router"));
  app.use("/upload", require("./uploadFile.router"));
};
