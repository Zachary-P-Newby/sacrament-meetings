import MeetingDisplay from "@/components/MeetingDisplay";

type Props = {
    searchParams: Promise<{ date: string }>;
}

export default async function Meetings({searchParams}:Props){
    const date = (await searchParams).date;

    console.log("Date:",date);

    return(
    <main className="flex flex-col justify-center">
        {MeetingDisplay(date)}
    </main>
  )
}