import connectdb from "@/app/(lib)/db";
import Ticket from "@/app/(lib)/models/ticketSchema";
import mongoose, { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
78
// Api for POST new Ticket----------------------------------------

export async function POST(req) {
    try {
        const { searchParams } = new URL(req.url)
        const userId = searchParams.get("userId")

        await connectdb()

        const body = await req.json()
        const { title, description, category, priority, progress, status } = body.newTicket;

        const newCreatedTicket = new Ticket({
            title,
            description,
            category,
            priority,
            progress,
            status,
            user: new Types.ObjectId(userId)
        })

        await newCreatedTicket.save()
        return NextResponse.json({ message: "Ticket created" })
    } catch (err) {
        return NextResponse.json({ message: "error", err })
    }
}

export async function GET(request) {

    try {
        await connectdb()

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id")

        if (id) {
            const query = { _id: id }
            console.log(query,"query")
            const tickets = await Ticket.findOne(query);
            console.log(tickets)
            return NextResponse.json(tickets)
        }

        else {
            const tickets = await Ticket.find();
            return new NextResponse(JSON.stringify(tickets), { message: "Fetched all tickets" })
        }

    } catch (error) {
        return NextResponse.json({ message: "erro", error }, { status: 500 })
    }
}
