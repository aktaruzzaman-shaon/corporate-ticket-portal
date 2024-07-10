import mongoose, { model, models, Schema } from "mongoose";

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
<<<<<<< HEAD:app/(lib)/models/ticketSchema.js
        user:{
            type: Schema.Types.ObjectId, ref: "User"
=======
        user: {
            type: Schema.Types.ObjectId, 
            ref: "User"
>>>>>>> 9452792d44bbad36aacbabc66a6f9cf385cf0f85:app/(lib)/ticketSchema.js
        }
    },
    { timestamps: true }
)

const Ticket = models.Ticket || model("Ticket", ticketSchema)

export default Ticket;
