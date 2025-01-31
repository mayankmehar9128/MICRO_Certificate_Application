const FrenchiseAprovedModel = require("../Models/frenchise_aproved");



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

module.exports = {
    deleteFranchise,
}