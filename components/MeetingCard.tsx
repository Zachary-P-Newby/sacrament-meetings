import { SacramentMeeting, formatMeetingType  } from "@/lib/types";
import Link from "next/link";

export interface MeetingCardProps{
    meeting: SacramentMeeting
    meetingDetailsLink: string,
}



export default function MeetingCard(
    {meeting,
    meetingDetailsLink}:MeetingCardProps){

    return(
        <article className="bg-neutral dark:bg-foreground p-4 rounded-md transition-transform hover:scale-120">
            <h2 className="text-lg font-bold">{meeting.date}</h2>
            <p>{formatMeetingType(meeting.meetingType)}</p>
            <h3>Hymns:</h3>
            <ul>
                <li>{meeting.openingHymn.number}. {meeting.openingHymn.title}</li>
                <li>{meeting.sacramentHymn.number}. {meeting.sacramentHymn.title}</li>
                <li>{meeting.closingHymn.number}. {meeting.closingHymn.title}</li>
            </ul>
            <Link className="font-bold text-blue-800 hover:text-sky-500" href={meetingDetailsLink}>Meeting Details</Link>
        </article>
    )

}