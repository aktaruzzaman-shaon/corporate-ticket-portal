import connectdb from "@/app/(models)/db"
import User from "@/app/(models)/userSchema"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectdb()
        const body = await req.json()
        const ticketData = body.user;
        console.log(body)
        const fetchData = await User.create(body)
        console.log(fetchData)
        return NextResponse.json({ message: "Ticket created" })
    } catch (err) {
        return NextResponse.json({ message: "error", err })
    }
}