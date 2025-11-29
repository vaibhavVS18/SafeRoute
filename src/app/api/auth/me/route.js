import connectDB from "@/lib/db.js";
import User from "@/models/user.model.js";
import { authUser } from "@/middleware/auth.middleware.js";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req) {
  // Safely get authenticated user
  const user = await authUser(req);

  if (!user || user.error) {
    return NextResponse.json(
      { error: user?.error || "Unauthorized" },
      { status: 401 }
    );
  }

  // Fetch user from database
  const dbUser = await User.findOne({ email: user.email }).lean(); // lean() removes _doc layer

  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Remove password safely
  delete dbUser.password;

  return NextResponse.json({ user: dbUser }, { status: 200 });
}
