import mongoose, { Schema } from "mongoose";
import {string} from "zod";

const userSchema = new Schema({
    firstName: {
        type: string,
        required: true
    },
    lastName: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    },
    userID: {
        type: string,
        default: ''
    },
    profileImage: {
        type: string
    }
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;