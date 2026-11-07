import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    
    <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center py-32 px-16 bg-neutral dark:bg-foreground">
        <h1 className="text-body-text text-4xl">Sacrament Meeting Planner</h1>
    
          <section  className="flex flex-col items-center space-evenly">
            <Image
            className="flex-2 rounded-lg border-white border-8"
            src="/SacramentMeetingCongregation.jpg"
            height={480}
            width={640}
            alt="Congregation"
            ></Image>
            <article id="overview" className="bg-background dark:bg-neutral p-4 rounded-md my-4">
              <h2 className="text-body-text text-3xl">Overview:</h2>
            <p>A Sacrament Meeting Planner for bishoprics and branch leaders to create and review meeting agendas. It organizes announcements, prayers, ward business, hymns, musical numbers, and speakers, while giving members access to current and past programs they can view or print.</p>
            </article>
            <Link href="/meetings" className="bg-primary dark:bg-primary text-background dark:text-foreground p-4 rounded-sm hover:bg-accent "><h3 className="text-3xl">Meetings</h3></Link>
          </section>
      </main>
  );
}
