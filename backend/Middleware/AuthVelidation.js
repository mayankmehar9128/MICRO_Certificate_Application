const Joi = require('joi');

const registerValidation = (req, res, next) => {
    const schema = Joi.object({
        centername: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(), // Fixed `email` validation
        contectno: Joi.string().min(10).required(),
        centerowner: Joi.string().min(3).max(100).required(),
        workexp: Joi.string().min(3).max(100).required(),
        areaofinterest: Joi.string().min(3).max(100).required(),
        state: Joi.string().min(3).max(100).required(),
        city: Joi.string().min(3).max(100).required(),
        pincode: Joi.string().min(3).max(100).required(),
        address: Joi.string().min(3).max(100).required(),
        // password: string().min(10).max(100).required(), // Added password validation
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error: error.details });
    }
    next();
};

// Validation middleware for franchise approval registration
const approvedValidation = (req, res, next) => {
    const schema = Joi.object({
        centercode: Joi.string().min(3).max(100).required(),
        centername: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        contectno: Joi.string().min(10).max(15).required(),
        alternatecontectno: Joi.string().min(10).max(15).required(),
        gender: Joi.string().valid('Male', 'Female', 'Other').required(),
        state: Joi.string().min(3).max(100).required(),
        pincode: Joi.string().length(6).required(),
        address: Joi.string().min(3).max(200).required(),
        password: Joi.string().min(10).max(100).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Validation Error', error: error.details });
    }
    next();
};

const loginValidation = (req, res, next) => {
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
    registerValidation,
    approvedValidation,
    loginValidation,
    adminLoginValidation
};