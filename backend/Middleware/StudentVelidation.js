const Joi = require('joi');
const upload = require('./Upload');

// Joi validation schema
const schema = Joi.object({
    studentname: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    fathername: Joi.string().min(3).max(100).required(),
    mothername: Joi.string().min(3).max(100).required(),
    contectno: Joi.string().min(3).max(100).required(),
    session: Joi.string().min(3).max(100).required(),
    registrationdate: Joi.string().min(3).max(100).required(),
    gender: Joi.string().min(3).max(100).required(),
    dateofbirth: Joi.string().min(3).max(100).required(),
    course: Joi.string().min(3).max(100).required(),
    address: Joi.string().min(10).max(100).required(),
});

    // Middleware function
    const studentValidation = (req, res, next) => {
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
    };

    // const { error } = schema.validate(req.body);
    // if (error) {
    //     return res.status(400).json({ message: "Bad request", error: error.details });
    // }
    // next();

module.exports = {
    studentValidation,
};