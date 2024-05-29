import connectdb from "@/app/(models)/db"
import User from "@/app/(models)/userSchema"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const userData = await req.json();
        await connectdb()
        await User.create({ name: " ticketportal" });
        console.log(userData)
        return NextResponse.json({ res: "Created" })
    } catch (err) {
        return NextResponse({ message: "error", err })
    }
}
