const bcrypt = require("bcrypt");
const FrenchiseAprovedModel = require("../Models/frenchise_aproved");
const StudentdModel = require("../Models/Student");


const StudentAdd = async (req, res) => {
    try {
        const {
            studetnname,
            email,
            fathername,
            mothername,
            contectno,
            session,
            registrationdate,
            gender,
            dateofbirth,
            course,
            address,
            studentimage,
        } = req.body;

        // Check if email is already registered
        const existingStudent = await StudentdModel.findOne({ email });
        if (existingStudent) {
            return res.status(409).json({
                message: "Student already added.",
                success: false,
            });
        }

        // Prepare the image data
        let studentImage = null;
        let imageMimeType = null;
        if (req.file) {
            studentImage = req.file.buffer; // Binary data from multer
            imageMimeType = req.file.mimetype; // MIME type of the image
        }

        // Create new franchise
        const newStudent = new StudentdModel({
            studetnname,
            email,
            fathername,
            mothername,
            contectno,
            session,
            registrationdate,
            gender,
            dateofbirth,
            course,
            address,
            studentimage,
        });

        // newStudent.creditcoins = 2000;
        await newStudent.save();

        return res.status(201).json({
            message: "Student Added successfully!",
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};



module.exports = {
    StudentAdd,
}