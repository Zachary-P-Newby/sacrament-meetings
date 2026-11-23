import Link from "next/link";
export default function AdminPage(){

    return(
        <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center py-32 px-16 bg-neutral dark:bg-foreground">
        <h1 className="text-body-text text-4xl">Sacrament Meeting Planner - Admin</h1>
    
          <section  className="flex flex-col items-center space-evenly">
               <Link className="mx-1 hover:text-primary" href="/meetings/new">New Meeting</Link>
          </section>
      </main>
    )
}