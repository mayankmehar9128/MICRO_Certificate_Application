const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FrenchiseAprovedSchema = new Schema({
    centercode: {
        type: 'string',
        required: true,
    },
    centername: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    contectno: {
        type: 'string',
        required: true,
    },
    alternatecontectno: {
        type: 'string',
        required: true,
    },
    gender: {
        type: 'string',
        required: true,
    },
    state: {
        type: 'string',
        required: true,
    },
    pincode: {
        type: 'string',
        required: true,
    },
    address: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    frenchiseimage: {
        type: 'Buffer', // Store the binary data for the image
        required: false, // Optional field
    },
    imagemimetype: {
        type: 'string', // Store the MIME type (e.g., 'image/jpeg', 'image/png')
        required: false,
    },
});


const FrenchiseAprovedModel = mongoose.model('frenchiseAproved', FrenchiseAprovedSchema);
module.exports = FrenchiseAprovedModel;