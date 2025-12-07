import { NextResponse } from "next/server";
import connectDB from "@/lib/db.js";
import { authUser } from "@/middleware/auth.middleware.js";
import { rejectGuardian } from "@/controllers/guardian.controller";

export const POST = authUser(async (req) => {
  try {
    await connectDB();

    const { guardianId } = await req.json();

    if (!guardianId) {
      return NextResponse.json(
        { error: "Guardian ID is required" },
        { status: 400 }
      );
    }

    const childId = req.user._id;

    const result = await rejectGuardian(childId, guardianId);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      message: "Guardian rejected successfully"
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
});
