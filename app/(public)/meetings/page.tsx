import { MeetingSearch } from "@/components/MeetingsSearch";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";
import MeetingCard from "@/components/MeetingCard";
import Pagination from "@/components/Pagination";
type Props = {
    searchParams?: Promise<{query?:string, page?:string}>;
}


export default async function Meetings(props:Props){
    const searchParams = await props.searchParams;
    const query = searchParams?.query ?? '';
    const currentPage = Number(searchParams?.page) || 1;



    const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main className="flex flex-col flex-gap-8 items-center">
      <h1 className="text-4xl w-full text-forground dark:text-foreground text-center m2">All Meetings:</h1>
      <MeetingSearch />
      <div className="grid grid-cols-2 gap-8 px-2 py-3 my-6">
        {meetings.map((m) => (
        <MeetingCard key={m.id} meeting={m} meetingDetailsLink={`/meetings/${m.id}`}/>
      ))}
      </div>
      <Pagination totalPages={totalPages} />
    </main>
  );
}
