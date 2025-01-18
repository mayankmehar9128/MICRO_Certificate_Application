const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const FrenchiseAprovedModel = require("../Models/frenchise_aproved");
const FrenchiseReqModel = require("../Models/frenchise_req");


const register = async (req, res) => {
    try {
        const { centername, email, contectno, centerowner, workexp, areaofinterest, state, city, pincode, address } = req.body;

        // Check if email is already registered
        const frenchiseApproved = await FrenchiseAprovedModel.findOne({ email });
        if (frenchiseApproved) {
            return res.status(409).json({
                message: 'Franchise is already registered, you can log in.',
                success: false
            });
        }

        // Hash the password and save the new franchise
        // const hashedPassword = await hash(password, 10);
        const frenchiseRegisterdModel = new FrenchiseReqModel({
            centername,
            email,
            contectno,
            centerowner,
            workexp,
            areaofinterest,
            state,
            city,
            pincode,
            address,
        });

        await frenchiseRegisterdModel.save();

        return res.status(200).json({
            message: 'Registered successfully!',
            success: true
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

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
        } = req.body;

        // Check if email is already registered
        const existingFrenchise = await FrenchiseAprovedModel.findOne({ email });
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
        });

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

const frenchiselogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find franchise by email
        const franchise = await FrenchiseAprovedModel.findOne({ email });
        const errorMessage = "Auth faild email or password is wrong";
        if (!franchise) {
            return res.status(404).json({
                message: errorMessage,
                success: false,
            });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, franchise.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid credentials.",
                success: false,
            });
        }
        const jwtToken = jwt.sign(
            { email: franchise.email, _id: franchise._id },
            process.env.JWT_SECRET,
            {expiresIn: '24h'}

        )

        return res.status(200).json({
            message: "Login successful!",
            success: true,
            jwtToken,
            email,
            centername: franchise.centername,
            centercode: franchise.centercode
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

// Admin credentials (hardcoded)
const adminUsername = "MICRO";
const adminPassword = "mayankmehar4";

// Controller for admin login and JWT token generation
const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the username and password match the admin's credentials
        if (username !== adminUsername || password !== adminPassword) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false
            });
        }

        // Generate JWT token if credentials are correct
        const token = jwt.sign(
            { username }, 
            process.env.JWT_SECRET, 
            { expiresIn: '24h' });

        return res.status(200).json({
            message: "Login successful",
            success: true,
            username: username,
            password: password,
            token: token
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

module.exports = {
    register,
    aproved,
    frenchiselogin,
    adminLogin
}
