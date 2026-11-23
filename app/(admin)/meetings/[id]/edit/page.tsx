
import MeetingForm from "@/components/MeetingForm";
import { updateMeeting } from "@/lib/actions";
import { Suspense } from "react";
import { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

type MeetingPageProps = {
  params: Promise<{ id: string }>;
};

async function fetchMeeting(id: string): Promise<SacramentMeeting | null> {
  console.log("fetch meeting")
  const origin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const response = await fetch(`${origin}/api/meetings/${id}`);

  if (!response.ok) return null;

  const data = await response.json();
  if(data.meeting){
    return data.meeting
  } else{
    return null;
  }
}



async function EditForm({ params }: MeetingPageProps) {
    const { id } = await params;
    const meeting = await fetchMeeting(id);

    if(meeting != null){
        
        

        return(<MeetingForm action={updateMeeting.bind(null, id)} meeting={meeting}></MeetingForm>)
    }
    else{
        notFound();
    }

    
}

export default async function EditMeetingPage({ params }: MeetingPageProps){
    
    
    return(
            <main className="font-barlow w-full mx-2">
                <h1 className="font-barlow font-bold text-3xl text-center">Update Meeting: </h1>
            <div className="bg-neutral p-2 flex flex-col items-center justify-center w-full max-w-window">
                <Suspense>
                    <EditForm params={params}/>
                </Suspense>
                
                
                
    
            </div>
            </main>
        )
}