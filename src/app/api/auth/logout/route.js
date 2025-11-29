import { NextResponse } from "next/server";
import redisClient from "@/services/redis.service.js";

export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    await redisClient.set(token, "logout", "EX", 60 * 60 * 24);

    return NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
