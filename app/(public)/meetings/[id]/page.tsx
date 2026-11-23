import { Suspense } from "react";
import MeetingDetail from "@/components/MeetingDetail";
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

async function MeetingContent({ params }: MeetingPageProps) {
  const { id } = await params;
  const meeting = await fetchMeeting(id);

  if (!meeting) {
    notFound();
  }

  return (
    <main className="my-10 flex flex-col">
      <h1 className="p-2 text-center text-4xl font-semibold">
        Meeting Details:
      </h1>
      <MeetingDetail meeting={meeting} />
    </main>
  );
}

export default function MeetingPage(props: MeetingPageProps) {
  return (
    <Suspense fallback={<h1 className="text-4xl text-foreground dark:text-foreground text-center">Please Be Patient</h1>}>
      <MeetingContent {...props} />
    </Suspense>
  );
}