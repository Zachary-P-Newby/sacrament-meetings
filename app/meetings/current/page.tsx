"use client"
import { getThisSunday } from "@/lib/types";
import { redirect } from "next/navigation";

export default function CurrentMeeting(){
    const meetingDate = getThisSunday();
    
    const URL = `/meetings?date=${meetingDate}`;
    redirect(URL, 'replace');
}