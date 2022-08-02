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
