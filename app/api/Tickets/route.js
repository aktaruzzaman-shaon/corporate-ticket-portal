import connectdb from "@/app/(models)/db";
import Ticket from "@/app/(models)/ticketSchema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

// Api for POST new Ticket----------------------------------------

export async function POST(req) {
    try {
        await connectdb()
        const body = await req.json()
        const ticketData = body.newTicket;
        await Ticket.create(ticketData)

        return NextResponse.json({ message: "Ticket created" })
    } catch (err) {
        return NextResponse.json({ message: "error", err })
    }
}

export async function GET(request) {

    try {
        await connectdb()
        const { searchParams } = new URL(request.url);
        const name = searchParams.get("name")
        console.log(name)
        if (name) {
            const query = {_id : name}
            const tickets = await Ticket.findOne(query);
            console.log(tickets)
            return NextResponse.json({ tickets: tickets })
        }
        else {
            const tickets = await Ticket.find();
            return NextResponse.json({ tickets: tickets })
        }
    } catch (error) {
        return NextResponse.json({ message: "erro", error }, { status: 500 })
    }
}
