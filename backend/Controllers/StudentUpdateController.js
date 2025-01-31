const StudentModel = require("../Models/Student");

// ✅ Update Student by ID
const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const updates = req.body;

        // Find and update student
        const updatedStudent = await StudentModel.findByIdAndUpdate(studentId, updates, { new: true });

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found", success: false });
        }

        return res.status(200).json({ message: "Student updated successfully!", success: true, data: updatedStudent });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = {
    updateStudent
};