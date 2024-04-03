import Ticket from "@/app/(models)/ticketSchema";
import { NextResponse } from "next/server";

// Api for POST new Ticket----------------------------------------
export async function POST(req) {
    try {
        const body = await req.json()
        const ticketData = body.newTicket;
        await Ticket.create(ticketData)
        return NextResponse.json({ message: "Ticket created" })
    } catch (err) {
        return NextResponse.json({ message: "error", err })
    }
}


export async function GET(req) {
    try {
        
        const tickets = await Ticket.find();
        return NextResponse.json({tickets})
    } catch (error) {
        return NextResponse.json({ message: "erro", error }, { status: 500 })
    }
}
