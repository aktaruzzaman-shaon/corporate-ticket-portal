import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Ticket title required"]
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        priority: {
            type: Number,
            required: true
        },
        progress: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId, 
            ref: "User"
        }
    },
    { timestamps: true }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)

export default Ticket;
