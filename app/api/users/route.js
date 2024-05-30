import connectdb from "@/app/(models)/db"
import User from "@/app/(models)/userSchema"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectdb()
        const body = await req.json()
        await User.create(body)
        return NextResponse.json({ message: "User Data stored" })
    } catch (err) {
        return NextResponse.json({ message: "error", err })
    }
}
