import connectDB from "@/lib/db.js";
import User from "@/models/user.model.js";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    const hashedPassword = await User.hashPassword(password);
    const user = await User.create({ username, email, password: hashedPassword });

    const token = user.generateJWT();
    delete user._doc.password;

    return NextResponse.json({ user, token }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
