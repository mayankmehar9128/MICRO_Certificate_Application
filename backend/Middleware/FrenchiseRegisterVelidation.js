const Joi = require('joi');

const frenchiseRegisterValidation = (req, res, next) => {
    const schema = Joi.object({
        centername: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(), // Fixed `email` validation
        contectno: Joi.string().min(10).max(15).required(),
        centerowner: Joi.string().min(3).max(100).required(),
        workexp: Joi.string().min(3).max(100).required(),
        areaofinterest: Joi.string().min(3).max(100).required(),
        state: Joi.string().min(3).max(100).required(),
        city: Joi.string().min(3).max(100).required(),
        pincode: Joi.string().min(3).max(100).required(),
        address: Joi.string().min(3).max(100).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error: error.details });
    }
    next();
};

module.exports = {
    frenchiseRegisterValidation,
};