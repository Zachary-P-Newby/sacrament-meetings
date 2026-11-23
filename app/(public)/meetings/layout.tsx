import Link from "next/link"
import { Suspense } from "react"

const linkClass = "mx-1 hover:text-primary font-semibold hover:bg-background rounded-md p-1 dark:hover:bg-foreground"

export default function MeetingsLayout({ children }: LayoutProps<"/">){
    return(
        <div className="w-full max-w-screen">
            <div className="bg-neutral p-1 items-start min-h-10 flex items-center justify-center text-center">
                <Link className={linkClass} href="/meetings">All Meetings</Link>
                <p className="my-auto">{ }|{ }</p>
                <Link className={linkClass} href="/meetings/current">Current Meeting</Link>
                <p className="my-auto">{ }|{ }</p>
                <Link className={linkClass} href="/meetings/new">New Meeting</Link>
            </div>
            <Suspense>
                {children}
            </Suspense>
            
        </div>
    )
}