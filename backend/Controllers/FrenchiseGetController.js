const FrenchiseAprovedModel = require("../Models/frenchise_aproved");



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

module.exports = {
    getFranchise,
}