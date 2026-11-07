import { getMeetings } from "@/lib/meetings-db";
import { NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    
    //create a URL object from the request URL and get the searchParams from it
    const {searchParams} = new URL(request.url);
    //get the type parameter from the search params
    const date = searchParams.get("date");
    
    
    if(!date){
        const meetings = getMeetings();
        if (!meetings){
            return NextResponse.json({error: "No Meetings Found"}, {status: 404})
        }
        return NextResponse.json({meetings: meetings}, {status: 200})
    }
    else{
        console.log("Date detected");
        const meetings = getMeetings(date);
        return NextResponse.json({meetings: meetings}, {status: 200})
    }

}