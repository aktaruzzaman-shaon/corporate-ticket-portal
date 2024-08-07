import mongoose, { Schema, Types, model, models, } from "mongoose";

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, "Name is required"]
        },
        userMail: {
            type: String,
            required: [true, "Password is require"]
        }
    },
    { timestamps: true }
)

const User = models.User || model("User", userSchema)

export default User;
