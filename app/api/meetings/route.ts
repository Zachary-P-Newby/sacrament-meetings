import { getMeetings } from "@/lib/meetings-db";
import { NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    
    //create a URL object from the request URL and get the searchParams from it
    const {searchParams} = new URL(request.url);
    //get the type parameter from the search params
    const query= searchParams.get("query");
    const page= searchParams.get("page");
    const date= searchParams.get("date");
    
    
    const meetings = await getMeetings(query || undefined, Number(page)|| undefined, date || undefined);
    if(meetings.length < 1){
        return NextResponse.json({message: "Meetings Not Found"}, {status: 404})
    }    
    return NextResponse.json({meetings: meetings}, {status: 200})

}