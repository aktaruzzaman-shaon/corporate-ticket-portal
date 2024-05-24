import connectdb from "@/app/(models)/db"
import User from "@/app/(models)/userSchema"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectdb()
        console.log(req.body)
        const body = await req.json()
        const userInfo = body.user;
        console.log(body)
        await User.create(userInfo)
        return NextResponse.json({ message: "User Data stored" })
    } catch (err) {
        return NextResponse({ message: "error", err })
    }
}