
import { SacramentMeeting } from "@/lib/types";
import MeetingCard from "./MeetingCard"
import { MeetingCardProps } from "./MeetingCard"

export default async function MeetingCardList(){

    const origin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}`: "http://localhost:3000";

    

    const response = await fetch(`${origin}/api/meetings`);
    const cards:MeetingCardProps[] = [];
    
    if(response.ok){
        const data = await response.json();
        data.meetings.forEach((meeting:SacramentMeeting) => {
            cards.push({ meeting, meetingDetailsLink: `/meetings/${meeting.id}` });
        });

    return (<div className="grid grid-cols-2 gap-8" >
        {cards.map((card)=>{return <MeetingCard key={card.meeting.id} meeting={card.meeting} meetingDetailsLink={card.meetingDetailsLink}/>})}
    </div>)
    }
    else{
        return (<h1>ERROR NO MEETINGS</h1>)
    }

}