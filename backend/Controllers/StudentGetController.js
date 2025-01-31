const StudentModel = require("../Models/Student");

// ✅ Get All Students with Certificate Numbers (for Mark Entry)
const GetAllStudents = async (req, res) => {
    try {
        const students = await StudentModel.find({}, "certificatenumber  studentname");
        return res.status(200).json({ students, success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

// ✅ Get Student by ID
const getStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await StudentModel.findById(studentId);

        if (!student) {
            return res.status(404).json({ message: "Student not found", success: false });
        }

        return res.status(200).json({ success: true, data: student });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = {
    GetAllStudents,
    getStudentById
};