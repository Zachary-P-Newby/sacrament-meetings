import { SacramentMeeting, formatMeetingType  } from "@/lib/types";
import Link from "next/link";
import { deleteMeeting } from "@/lib/actions";

export interface MeetingCardProps{
    meeting: SacramentMeeting
    meetingDetailsLink: string,
}



export default function MeetingCard(
    {meeting,
    meetingDetailsLink}:MeetingCardProps){

    return(
        <article className="bg-neutral dark:bg-foreground p-4 rounded-md transition-transform hover:scale-120 flex flex-col gap-2">
            <h2 className="text-lg font-bold">{meeting.date}</h2>
            <p>{formatMeetingType(meeting.meetingType)}</p>
            <h3>Hymns:</h3>
            <ul>
                <li>{meeting.openingHymn.number}. {meeting.openingHymn.title}</li>
                <li>{meeting.sacramentHymn.number}. {meeting.sacramentHymn.title}</li>
                <li>{meeting.closingHymn.number}. {meeting.closingHymn.title}</li>
            </ul>
            <div className="flex items-center justify-between gap-1">
                <Link aria-label="Meeting Details Link" className="font-bold text-blue-800 bg-white transiton hover:bg-blue-800 hover:text-white rounded p-2 " href={meetingDetailsLink}>Meeting Details</Link>
                <Link aria-label="Meeting Details Link" className="font-bold text-amber-600 bg-white transiton hover:bg-amber-600 hover:text-white rounded p-2 " href={`/meetings/${meeting.id}/edit`}>Edit Meeting</Link>
            <form action={deleteMeeting.bind(null, meeting.id.toString())} aria-label="Delete Meetings Form">
                <button aria-label="Delete Meetings Button" type="submit" className="font-bold bg-white p-2 transition rounded text-red-500 hover:text-white hover:bg-red-500">Delete?</button>
            </form>
            </div>
            
        </article>
    )

}