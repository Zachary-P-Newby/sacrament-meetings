
import MeetingForm from "@/components/MeetingForm";
import { createMeeting } from "@/lib/actions";
import { Suspense } from "react";

export default async function  CreateMeetingPage(){

    return(
        <main className="font-barlow w-full mx-0 max-w-window flex flex-col gap-2 items-center">
            <h1 className="font-barlow font-bold text-3xl text-center max-w-4/5">Create New Meeting: </h1>
        <div className="bg-neutral p-2 flex flex-col items-center justify-center w-full max-w-4/5 mb-10 rounded">
            <Suspense>
                <MeetingForm action={createMeeting}></MeetingForm>
            </Suspense>
            
            
            

        </div>
        </main>
    )
}