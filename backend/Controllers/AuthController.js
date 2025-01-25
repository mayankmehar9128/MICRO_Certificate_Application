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
            role: 'franchise' // Explicitly set role during registration
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

// Get all approved franchises or a specific franchise by email
const getFranchise = async (req, res) => {
    try {
        const { email } = req.query; // Use query param to fetch specific data
        let franchises;

        if (email) {
            franchises = await FrenchiseAprovedModel.findOne({ email });
            if (!franchises) {
                return res.status(404).json({
                    message: "Franchise not found.",
                    success: false
                });
            }
        } else {
            franchises = await FrenchiseAprovedModel.find(); // Fetch all franchises
        }

        return res.status(200).json({
            message: "Franchise(s) retrieved successfully.",
            success: true,
            data: franchises
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Update franchise details
const updateFranchise = async (req, res) => {
    try {
        const { email } = req.body; // Identify the franchise by email

        if (!email) {
            return res.status(400).json({
                message: "Email is required for updating franchise.",
                success: false
            });
        }

        const updatedFranchise = await FrenchiseAprovedModel.findOneAndUpdate(
            { email },
            { $set: req.body }, // Update with the provided fields
            { new: true, runValidators: true } // Return the updated document
        );

        if (!updatedFranchise) {
            return res.status(404).json({
                message: "Franchise not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Franchise updated successfully.",
            success: true,
            data: updatedFranchise
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Delete franchise
const deleteFranchise = async (req, res) => {
    try {
        const { email } = req.body; // Identify the franchise by email

        if (!email) {
            return res.status(400).json({
                message: "Email is required for deleting franchise.",
                success: false
            });
        }

        const deletedFranchise = await FrenchiseAprovedModel.findOneAndDelete({ email });

        if (!deletedFranchise) {
            return res.status(404).json({
                message: "Franchise not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Franchise deleted successfully.",
            success: true,
            data: deletedFranchise
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
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

         // Check credit coin balance
         if (franchise.creditcoins < 200) {
            return res.status(403).send("Insufficient credit coins. Minimum 200 coins required to login.");
        }

        const token = jwt.sign(
            { email: franchise.email, _id: franchise._id, role: franchise.role },
            process.env.JWT_SECRET,
            {expiresIn: '24h'}

        )

        return res.status(200).json({
            message: "Login successful!",
            success: true,
            token,
            email,
            role: franchise.role,
            centername: franchise.centername,
            centercode: franchise.centercode,
            creditcoins: franchise.creditcoins
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
const role = "admin";

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
            { username, role: 'admin' }, 
            process.env.JWT_SECRET, 
            { expiresIn: '24h' });

        return res.status(200).json({
            message: "Login successful",
            success: true,
            username: username,
            role: role,
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

const createCertificate = async (req, res) => {
    try {
        const { email, studentDetails } = req.body;

        const franchise = await FrenchiseAprovedModel.findById({ email });
        if (!franchise) return res.status(404).send("Franchise not found.");

        // Check if franchise has enough coins
        if (franchise.creditcoins < 20) {
            return res.status(403).send("Insufficient credit coins. Cannot create certificate.");
        }

        // Deduct 20 coins
        franchise.creditcoins -= 20;
        await franchise.save();

        // Certificate creation logic here
        // ...

        res.status(201).send("Certificate created successfully.");
    } catch (err) {
        res.status(500).send("Error creating certificate.");
    }
};

// const verifyRole = (roles) => {
//     return (req, res, next) => {
//         try {
//             const token = req.headers.authorization.split(' ')[1]; // Token extraction
//             if (!token) {
//                 return res.status(401).json({
//                     message: 'No token provided',
//                     success: false,
//                 });
//             }

//             console.log('Token received:', token); // Log the token for debugging
            
//             const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode the token
//             console.log('Decoded JWT:', decoded); // Log decoded JWT to check if the token is valid

//             if (!roles.includes(decoded.role)) {
//                 return res.status(403).json({
//                     message: 'Access denied. Insufficient permissions.',
//                     success: false,
//                 });
//             }

//             req.user = decoded; // Attach user details to the request
//             next();
//         } catch (err) {
//             console.error('Error during token verification:', err); // Log the error for debugging
//             return res.status(401).json({
//                 message: 'Unauthorized',
//                 success: false,
//             });
//         }
//     };
// };

module.exports = {
    register,
    aproved,
    frenchiselogin,
    adminLogin,
    getFranchise,
    updateFranchise,
    deleteFranchise,
    // verifyRole
}
