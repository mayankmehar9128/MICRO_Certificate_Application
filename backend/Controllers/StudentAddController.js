const bcrypt = require("bcrypt");
const FrenchiseAprovedModel = require("../Models/frenchise_aproved");
const StudentdModel = require("../Models/Student");

const generateCertificateNumber = async () => {
    try {
        const lastStudent = await StudentdModel.findOne().sort({ _id: -1 });

        let newCertificateNumber;
        if (!lastStudent || !lastStudent.certificatenumber) {
            newCertificateNumber = "MICRO/0001";
        } else {
            const lastNumber = parseInt(lastStudent.certificatenumber.split("/")[1]);
            const nextNumber = (lastNumber + 1).toString().padStart(4, "0");
            newCertificateNumber = `MICRO/${nextNumber}`;
        }

        return newCertificateNumber;
    } catch (error) {
        console.error("Error generating certificate number:", error);
        return "MICRO/0001"; // Fallback
    }
};


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
            certificatenumber  // Allow manual input if needed
        } = req.body;

        // Check if email is already registered
        const existingStudent = await StudentdModel.findOne({ email });
        if (existingStudent) {
            return res.status(409).json({
                message: "Student already added.",
                success: false,
            });
        }

        // Use provided certificate number or generate one
        const finalCertificateNumber = certificatenumber || await generateCertificateNumber();

        // Prepare the image data
        let studentImage = null;
        let imageMimeType = null;
        if (req.file) {
            studentImage = req.file.buffer; // Binary data from multer
            imageMimeType = req.file.mimetype; // MIME type of the image
        }

        // Create new franchise
        const newStudent = new StudentdModel({
            certificatenumber: finalCertificateNumber, // Store certificate number
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
            certificatenumber: finalCertificateNumber
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