import { SacramentMeeting, formatMeetingType} from "@/lib/types";
import SpeakerList from "./SpeakerList";


export default async function MeetingDetail(meeting:SacramentMeeting){
    return(
        <article className="w-140 max-w-screen flex flex-col text-center bg-neutral dark:bg-foreground p-4 mx-auto rounded-lg">
            <h2 className="font-bold text-2xl">{meeting.date}</h2>
            <p className="text-2xl">{formatMeetingType(meeting.meetingType)}</p>
            <h3 className="text-2xl">Program:</h3>
            <section className="text-lg">
                <p>Presiding: {meeting.presiding}</p>
                <p>Conducting: {meeting.conducting}</p>
                <p>Opening Hymn: {meeting.openingHymn.number}. {meeting.openingHymn.title}</p>
                <p>Opening Prayer: {meeting.openingPrayer}</p>
                <p>Ward and Stake Business</p>
                <p>Sacrament Hymn: {meeting.sacramentHymn.number}. {meeting.sacramentHymn.title}</p>
                <h4>Speakers:</h4>
                <div>
                    {meeting.meetingType === "testimony" ? <p>Congregation Testimonies</p>:<SpeakerList speakers={meeting.speakers}/>}
                </div>
                <p>Closing Hymn: {meeting.closingHymn.number}. {meeting.closingHymn.title}</p>
                <p>Closing Prayer: {meeting.closingPrayer}</p>
            </section>
            <h3>Ward Business:</h3>
            <ul>
                {meeting.wardBusiness.map((item)=>{
                    return <li key={item.description}>{item.description}</li>
                })}
            </ul>
            <h3>Announcements:</h3>
            <ul>
                {meeting.announcements?.map((item)=>{
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </article>
    )

}