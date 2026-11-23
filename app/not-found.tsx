import Link from "next/link";
export default function NotFoundPage(){


  return(
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center py-32 px-16 bg-neutral dark:bg-foreground">
      <h1 className="text-body-text text-4xl">404 Not Found</h1>
  
        <section  className="flex flex-col items-center space-evenly gap-1">
          <p className="text-3xl text-center"> The Resource you were looking for could not be found.</p>
              <Link className="mx-1 bg-neutral font-bold hover:text-primary hover:bg-indigo-600 hover:text-white rounded p-2 border border-white" href="/">Go Home?</Link>
        </section>
    </main>
  )
}