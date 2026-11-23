import Link from "next/link"
import { Suspense } from "react"

export default function MeetingsLayout({ children }: LayoutProps<"/">){
    return(
        <div className="w-full max-w-screen">
            <div className="bg-neutral p-1 items-start min-h-10 flex items-center justify-center text-center">
                <Link className="mx-1 hover:text-primary" href="/meetings">All Meetings</Link> | { }
                <Link className="mx-1 hover:text-primary" href="/meetings/new">New Meeting</Link>
            </div>
            <Suspense>
                {children}
            </Suspense>
            
        </div>
    )
}