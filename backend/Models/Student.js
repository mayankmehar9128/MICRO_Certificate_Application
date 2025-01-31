const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentsSchema = new Schema({
    studentname: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    fathername: {
        type: 'string',
        required: true,
    },
    mothername: {
        type: 'string',
        required: true,
    },
    contectno: {
        type: 'string',
        required: true,
    },
    session: {
        type: 'string',
        required: true,
    },
    registrationdate: {
        type: 'date',
        required: true,
    },
    gender: {
        type: 'string',
        required: true,
    },
    
    dateofbirth: {
        type: 'date',
        required: true,
    },
    course: {
        type: 'string',
        required: true,
    },
    address: {
        type: 'string',
        required: true,
    },
    studentimage: {
        type: 'string', // Store the binary data for the image
        required: false, // Optional field
    },
    role: { type: String, enum: ['student'], default: 'student' } // Role field
});


const StudentdModel = mongoose.model('Students', StudentsSchema);
module.exports = StudentdModel;