const StudentModel = require("../Models/Student");



// ✅ Delete Student by ID
const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id;

        // Find and delete student
        const deletedStudent = await StudentModel.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found", success: false });
        }

        return res.status(200).json({ message: "Student deleted successfully!", success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = {
    deleteStudent
};