import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)


const ticketSchema = new Schema(
    {
        title: {
            type: String,
            required: true
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
        }
    },
    { timestamps: true }
)

const Ticket = mongoose.model("Ticket", ticketSchema)

export default Ticket;
