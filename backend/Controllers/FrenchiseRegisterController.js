const FrenchiseAprovedModel = require("../Models/frenchise_aproved");
const FrenchiseReqModel = require("../Models/frenchise_req");

// Frenchise Register
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


module.exports = {
    register,
}