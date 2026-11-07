"use cache"
import MeetingDetail from "@/components/MeetingDetail";
import { Suspense } from "react";
import { SacramentMeeting } from "@/lib/types";

type MeetingPageProps = {
    params: Promise<{ id: string }>;
}

async function fetchMeeting(id:string):Promise<SacramentMeeting | null>{
    const origin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}`: "http://localhost:3000";
    
    
    const response = await fetch(`${origin}/api/meetings/${id}`);

    if(response.ok){
        const data = await response.json();
        return data.meeting;
    }
    else{
        return null;
    }
    
}

export default async function Meeting({params}: MeetingPageProps){

    const id= (await params).id;

    const meeting = await fetchMeeting(id);
    if(meeting == null){
        return(<div><h1>Error Occurred. Meeting</h1></div>)
    }

    
    return (<div>
        <h1 className="text-4xl text-forground dark:text-foreground w-full text-center m-2">Meetings Details:</h1>
        <Suspense fallback={<h1>Meeting Loading</h1>}>
            <MeetingDetail {...meeting} />
        </Suspense>
    </div>)
}