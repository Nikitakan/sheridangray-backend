const Joi = require('joi');
const {sendResponse}=require("../helpers/requestHandler.helper")
const {uniqueSubCategory}= require("./rule/uniqueSubCategory.rule")

module.exports.addSubCategoryValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            name: Joi.string().required()
        })
        let { value, error } = schema.validate(req.body);
        
        if (error !== undefined) {
            return sendResponse(res, false, 422, error.details[0].message);
        }

        if(!(await uniqueSubCategory(value.name))){
            return sendResponse(res, false, 422, 'sub-category already exits in DB');
        }

        //set the variable in the request for validated data
        req.validated = value;
        next();
    }catch(error){
        next(error);
    }
}

module.exports.updateSubCategoryValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            name: Joi.string()
        })
        let { value, error } = schema.validate(req.body);
        
        if (error !== undefined) {
            return sendResponse(res, false, 422, error.details[0].message);
        }

        if(!(await uniqueSubCategory(value.name))){
            return sendResponse(res, false, 422, 'sub-category already exits in DB');
        }

        //set the variable in the request for validated data
        req.validated = value;
        next();
    }catch(error){
        next(error);
    }
}

