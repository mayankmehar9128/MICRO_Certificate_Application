const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FrenchiseReqSchema = new Schema({
    centername: {
        type: 'string',
        required: true,
    },
    centerowner: {
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
    workexp: {
        type: 'string',
        required: true,
    },
    areaofinterest: {
        type: 'string',
        required: true,
    },
    state: {
        type: 'string',
        required: true,
    },
    city: {
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
});


const FrenchiseReqModel = mongoose.model('frenchisereg', FrenchiseReqSchema);
module.exports = FrenchiseReqModel;