const Joi = require('joi');
const {sendResponse}=require("../helpers/requestHandler.helper")


module.exports.addMealValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            day: Joi.string().required(),
            date: Joi.string().required(),
            categoryId: Joi.string().hex().length(24).required(),
            recipeId:Joi.string().hex().length(24).required(),
        }) 
        let { value, error } = schema.validate(req.body);
        if (error !== undefined) {
            return sendResponse(res, false, 422, error.details[0].message);
        }

     
        //set the variable in the request for validated data
        req.validated = value;
        next();
    }catch(error){
        next(error);
    }
}


module.exports.getMealByDateValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            startDate: Joi.string().required(),
            endDate: Joi.string().required(),
        }) 
        let { value, error } = schema.validate(req.query);
        if (error !== undefined) {
            return sendResponse(res, false, 422, error.details[0].message);
        }

     
        //set the variable in the request for validated data
        req.validated = value;
        next();
    }catch(error){
        next(error);
    }
}




module.exports.updateMealValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            day: Joi.string(),
            date: Joi.string(),
            categoryId: Joi.string().hex().length(24),
            recipeId:Joi.string().hex().length(24),
        })
        let { value, error } = schema.validate(req.body);
        if (error !== undefined) {
            return sendResponse(res, false, 422, error.details[0].message);
        }

     
        //set the variable in the request for validated data
        req.validated = value;
        next();
    }catch(error){
        next(error);
    }
}