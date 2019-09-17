const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
    createdAt: String,
    title: String,
    content: String,
    image: String,
    latitude: Number,
    longitude: Number,
    author: {type: mongoose.Schema.ObjectId, ref: "User"}, // link this mongoose-created id with the ref "User"
    comments: [{
        text: String,
        createdAt: {type: Date, default: Date.now},
        author: {type: mongoose.Schema.ObjectId, ref: "User"}, //tell mongoose to check the pre-build ObjectId if there is any ref : "User"
    }],
}, {timestamps: true});

module.exports = mongoose.model("Pin", pinSchema)