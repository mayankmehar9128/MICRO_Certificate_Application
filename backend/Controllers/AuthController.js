const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const FrenchiseAprovedModel = require("../Models/frenchise_aproved");


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
    frenchiselogin,
    adminLogin,
    // verifyRole
}
