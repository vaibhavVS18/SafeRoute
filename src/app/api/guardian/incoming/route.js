import { NextResponse } from "next/server";
import connectDB from "@/lib/db.js";
import { authUser } from "@/middleware/auth.middleware.js";
import { getIncomingRequests } from "@/controllers/guardian.controller";

export const GET = authUser(async (req) => {
  try {
    await connectDB();

    const childId = req.user._id;

    const result = await getIncomingRequests(childId);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      requests: result.requests
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
});
