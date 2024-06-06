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
        const id = request.nextUrl.searchParams;
        const query = id.get("id")
        console.log(query,"query")
        const tickets = await Ticket.find();
        // console.log(tickets)
        return NextResponse.json({ tickets: tickets })
    } catch (error) {
        return NextResponse.json({ message: "erro", error }, { status: 500 })
    }
}
