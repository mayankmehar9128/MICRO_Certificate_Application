const bcrypt = require("bcrypt");
const FrenchiseAprovedModel = require("../Models/frenchise_aproved");




const aproved = async (req, res) => {
    try {
        const {
            centercode,
            centername,
            email,
            contectno,
            alternatecontectno,
            gender,
            state,
            pincode,
            address,
            password,
            creditcoins
        } = req.body;

        // Check if email is already registered
        const existingFrenchise = await FrenchiseAprovedModel.findOne({ email, centercode });
        if (existingFrenchise) {
            return res.status(409).json({
                message: "Franchise already apoved.",
                success: false,
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Prepare the image data
        let frenchiseImage = null;
        let imageMimeType = null;
        if (req.file) {
            frenchiseImage = req.file.buffer; // Binary data from multer
            imageMimeType = req.file.mimetype; // MIME type of the image
        }

        // Create new franchise
        const newFrenchise = new FrenchiseAprovedModel({
            centercode,
            centername,
            email,
            contectno,
            alternatecontectno,
            gender,
            state,
            pincode,
            address,
            password: hashedPassword,
            frenchiseimage: frenchiseImage,
            imagemimetype: imageMimeType,
            creditcoins
        });

        newFrenchise.creditcoins = 2000;
        await newFrenchise.save();

        return res.status(201).json({
            message: "Franchise registered successfully!",
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
    aproved,
}
