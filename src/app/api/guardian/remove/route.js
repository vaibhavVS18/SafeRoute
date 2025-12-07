import { NextResponse } from "next/server";
import connectDB from "@/lib/db.js";
import { authUser } from "@/middleware/auth.middleware.js";
import { removeGuardian } from "@/controllers/guardian.controller.js";

export const POST = authUser(async (req)=>{
    try{
        await connectDB();

        // const user = await authUser(req);  // OR   as used it above as a function that takes function in input

        const user = req.user;

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const {guardianEmail} = await req.json();
        if (!guardianEmail) {
            return NextResponse.json(
                { error: "Guardian email is required" },
                { status: 400 }
            );
        }


        const curreUserId = user._id;
        const result = await removeGuardian(curreUserId, guardianEmail);

        if(result.error){
            return NextResponse.json({error: result.error}, {status: 400});
        }

        return NextResponse.json({
            message: "Guardian removed successfully",
        });

    }
    catch(error){
        console.error(error);

        return NextResponse.json(
            {error: "Something went wrong"},
            {status: 500}
        );
    }
})