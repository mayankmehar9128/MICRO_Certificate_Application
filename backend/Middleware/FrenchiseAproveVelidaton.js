const Joi = require('joi');
const upload = require('./Upload');

// Validation middleware for franchise approval registration
const frenchiseApprovedValidation = (req, res, next) => {
    const schema = Joi.object({
        centercode: Joi.string().trim().min(3).max(100).required(),
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

    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: "File upload error", error: err.message });
        }

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: "Bad request", error: error.details });
        }

        if (!req.file) {
            return res.status(400).json({ message: "studentimage is required" });
        }

        next();
    });

    // const { error } = schema.validate(req.body);
    // if (error) {
    //     return res.status(400).json({ message: 'Validation Error', error: error.details });
    // }
    // next();
};

module.exports = {
    frenchiseApprovedValidation,
};