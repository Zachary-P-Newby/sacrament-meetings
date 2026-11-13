import { NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

export async function GET(
    _request: Request,
    { params }: {  params: Promise<{ id: string }>  }
) {
    const parameters = await params;
    
    const id = Number(parameters.id);
    console.log(id);
    if (Number.isNaN(id)){
        return NextResponse.json({error: 'Invalid id'}, {status: 400});
    }
    const meeting = await getMeetingById(id);

    if (!meeting){
        return NextResponse.json({error: "Meeting Not Found"}, {status: 404})
    }

    return NextResponse.json({meeting: meeting}, {status: 200})

}