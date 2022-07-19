const Joi = require('joi');
const {sendResponse}=require("../helpers/requestHandler.helper")


module.exports.addRecipeValidation = async (req, res, next) => {
    try{
        const schema = Joi.object({
            name: Joi.string().required(),
            image: Joi.string().required(),
            ingredients:Joi.array().items(Joi.object({ingredient:Joi.string().required(),quantity:Joi.number().required(),qType:Joi.string().optional()})).required(),
            preparation: Joi.array().items(Joi.object({info:Joi.string().required(),step:Joi.number()})).required(),
            servingSize: Joi.number().required(),
            prepTime: Joi.number().required(),
            cookTime: Joi.number().required(),
            totalTime: Joi.number().required(),
            categories: Joi.array().items(Joi.string().hex().length(24)),
            subCategory:Joi.string().hex().length(24).required(),
            visibility:Joi.string().required()
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
            prepTime: Joi.number(),
            cookTime: Joi.number(),
            totalTime: Joi.number(),
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