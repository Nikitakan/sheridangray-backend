const Joi = require('joi');
const {sendResponse}=require("../helpers/requestHandler.helper")


module.exports.addRecipeValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            name: Joi.string().required(),
            ingredients:Joi.array().items(Joi.object({name:Joi.string().required(),quantity:Joi.number().required()})).required(),
            preparation: Joi.array().items(Joi.string()).required(),
            servingSize: Joi.number().required(),
            prepTime: Joi.string().required(),
            cookTime: Joi.string().required(),
            totalTime: Joi.string().required(),
            categories: Joi.array().items(Joi.string().hex().length(24)),
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



module.exports.isIdValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            id: Joi.string().hex().length(24),
        })
        let { value, error } = schema.validate(req.params);
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


module.exports.updateRecipeValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            name: Joi.string().required(),
            ingredients:Joi.array().items(Joi.object({name:Joi.string().required(),quantity:Joi.number().required()})),
            preparation: Joi.array().items(Joi.string()),
            servingSize: Joi.number(),
            prepTime: Joi.string(),
            cookTime: Joi.string(),
            totalTime: Joi.string(),
            categories: Joi.string().hex().length(24),
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