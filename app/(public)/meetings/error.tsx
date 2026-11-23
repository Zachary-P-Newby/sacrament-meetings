"use client"
import Link from "next/link"

type ErrorPageProps = {
    error: Error & { digest: string };
    reset: () => void
}

export default function ErrorPage({error, reset}:ErrorPageProps){
    return(
        <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center py-32 px-16 bg-neutral dark:bg-foreground">
        <h1 className="text-body-text text-4xl">An Error Occurred</h1>
    
          <section  className="flex flex-col items-center space-evenly gap-4">
            <h2 className="text-3xl text-center">The following error occurred:</h2>
            <article className="bg-white border-red-500 border rounded-lg p-2">
                <p>{error.digest}</p>
                <p>{error.message}</p>
            </article>
               
            <button onClick={reset} className="bg-neutral-dark text-white font-semibold px-4 py-3 transition hover:bg-primary rounded">Try again?</button>
            <Link className="px-2 py-1 mx-1 bg-neutral hover:text-primary hover:bg-primary hover:text-background dark:hover:text-foreground rounded" href="/meetings">Go back to Meetings?</Link>
          </section>
      </main>
    )
}