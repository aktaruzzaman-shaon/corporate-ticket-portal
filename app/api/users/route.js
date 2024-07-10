import connectdb from "@/app/(lib)/db"
import User from "@/app/(lib)/models/userSchema"
import { NextResponse } from "next/server"

// post user data to db
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

// get users from db
export async function GET(req) {
    try {
        await connectdb()
        const users = await User.find()
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({ message: "User fetching error" }, { status: 500 })
    }
}

