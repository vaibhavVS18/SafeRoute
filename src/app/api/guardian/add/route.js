import { NextResponse } from "next/server";
import connectDB from "@/lib/db.js";
import {authUser} from "@/middleware/auth.middleware.js";
import { addGuardian } from "@/controllers/guardian.controller";


export const POST = authUser(async(req)=>{
    try{
        await connectDB();

        const {guardianEmail} = await req.json();

        if(!guardianEmail){
            return NextResponse.json(
                {error: "Guardian email is required"},
                {status: 400}
            );
        }

        const currentUserId = req.user._id;

        const result = await addGuardian(currentUserId, guardianEmail);

        if(result.error){
            return NextResponse.json({error: result.error}, {status: 400});
        }

        return NextResponse.json({
        message: "Guardian added successfully",
        guardian: {
            id: result.guardian._id,
            name: result.guardian.username,
            email: result.guardian.email,
        },
        });
    }
    catch(err){
        console.error(err);

        return NextResponse.json(
            {error: "Something went wrong"},
            {status: 500},
        );
    }
})