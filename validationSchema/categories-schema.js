const Joi = require('joi');
const {sendResponse}=require("../helpers/requestHandler.helper")
const {uniqueCategory}= require("./rule/uniqueCategory.rule")

module.exports.addCategoryValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            name: Joi.string().required(),
            subCategories:Joi.array().items(Joi.string().hex().length(24)).required(),
        })
        let { value, error } = schema.validate(req.body);
        
        if (error !== undefined) {
            return sendResponse(res, false, 422, error.details[0].message);
        }

        if(!(await uniqueCategory(value.name))){
            return sendResponse(res, false, 422, 'category already exits in DB');
        }

        //set the variable in the request for validated data
        req.validated = value;
        next();
    }catch(error){
        next(error);
    }
}

module.exports.updateCategoryValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            name: Joi.string(),
            subCategories:Joi.array().items(Joi.string().hex().length(24)),
        })
        let { value, error } = schema.validate(req.body);
        
        if (error !== undefined) {
            return sendResponse(res, false, 422, error.details[0].message);
        }

        if(!(await uniqueCategory(value.name))){
            return sendResponse(res, false, 422, 'category already exits in DB');
        }

        //set the variable in the request for validated data
        req.validated = value;
        next();
    }catch(error){
        next(error);
    }
}

