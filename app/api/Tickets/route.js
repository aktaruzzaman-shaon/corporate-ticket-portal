import Ticket from "@/app/(ticketSchema)/ticketSchema";
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