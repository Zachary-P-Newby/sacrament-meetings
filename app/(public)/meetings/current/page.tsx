import { getThisSunday } from "@/lib/types";
import { redirect } from "next/navigation";
import { getMeetingIdByDate } from "@/lib/meetings-db";
import { connection } from 'next/server'
export default async function CurrentMeeting(){
    await connection();
    const meetingDate = getThisSunday();
    const meetingId = await getMeetingIdByDate(meetingDate);

    if(!meetingId){
       const URL = `/meetings/`;
       redirect(URL, 'replace');
    }
    else{
        const URL = `/meetings/${meetingId}`;
        redirect(URL, 'replace');
    }
    
}