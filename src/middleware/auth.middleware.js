import jwt from "jsonwebtoken";
import redisClient from "@/services/redis.service.js";
import { NextResponse } from "next/server";

export async function authUser(req) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check token in Redis blacklist
    const isBlacklisted = await redisClient.get(token);
    if (isBlacklisted) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded.user; // return user data instead of req.user

  } catch (err) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
