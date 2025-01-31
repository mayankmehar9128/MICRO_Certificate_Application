const Joi = require('joi');

// Validation middleware for franchise login admin login

const frenchiseLoginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(10).max(100).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Validation Error', error: error.details });
    }
    next();
};

// Admin login validation
const adminLoginValidation = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error: error.details
        });
    }

    next();
};

module.exports = {
    frenchiseLoginValidation,
    adminLoginValidation
};