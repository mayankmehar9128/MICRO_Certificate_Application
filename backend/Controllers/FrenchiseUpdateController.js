const FrenchiseAprovedModel = require("../Models/frenchise_aproved");


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


module.exports = {
    updateFranchise,
}