const Joi = require('joi');

//validate all fields for category request
function validateCategory(data){
    const schema = Joi.object({
        title:Joi.string().required(),
        description:Joi.string()
    })

    return schema.validate(data)
}
function validateCategoryGeneral(data){
    const schema = Joi.object({
        id:Joi.number(),
        title:Joi.string().required(),
        description:Joi.string()
    })

    return schema.validate(data)
}
function validateCategoryProductRequest(data){
    const schema = Joi.object({
        title:Joi.string().required(),
        description:Joi.string(),
        image:Joi.string(),
        price:Joi.number().min(5)
    })
    return schema.validate(data);
}
module.exports= {
    validateCategory,
    validateCategoryGeneral,
    validateCategoryProductRequest
};