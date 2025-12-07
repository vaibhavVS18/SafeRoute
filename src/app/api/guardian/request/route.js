import { NextResponse } from "next/server";
import connectDB from "@/lib/db.js";
import { authUser } from "@/middleware/auth.middleware.js";
import { requestGuardian } from "@/controllers/guardian.controller";

export const POST = authUser(async (req) => {
  try {
    await connectDB();

    const { childEmail } = await req.json();

    if (!childEmail) {
      return NextResponse.json(
        { error: "Child email is required" },
        { status: 400 }
      );
    }

    const guardianId = req.user._id;

    const result = await requestGuardian(guardianId, childEmail);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      message: "Request sent successfully",
      child: {
        id: result.child._id,
        name: result.child.username,
        email: result.child.email
      }
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
});
