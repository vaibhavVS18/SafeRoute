import jwt from "jsonwebtoken";
import redisClient from "@/services/redis.service.js";
import { NextResponse } from "next/server";

export function authUser(handler) {
  return async function (req) {
    try {
      const authHeader = req.headers.get("authorization");

      if (!authHeader) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const token = authHeader.split(" ")[1];

      if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      // Check blacklist
      const isBlacklisted = await redisClient.get(token);
      if (isBlacklisted) {
        return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // attach user to req object
      req.user = decoded.user;

      // continue to original handler
      return handler(req);

    } catch (err) {
      console.error("Auth error:", err);
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  };
}
