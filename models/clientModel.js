import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        trim: true,
    },
    subject: {
        type: String,
        required: [true, 'Please provide your subject'],
        trim: true,
    },
    message: {
        type: String,
        required: [true, 'Please provide your message'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const dimaxClient = mongoose.models.dimaxClient || mongoose.model('dimaxClient', clientSchema);

export default dimaxClient;
