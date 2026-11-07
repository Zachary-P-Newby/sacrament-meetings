import Link from "next/link"

export default function MeetingsLayout({ children }: LayoutProps<"/">){
    return(
        <div className="w-full max-w-screen">
            <div className="bg-neutral dark:bg-foreground p-1 items-start">
                <Link className="mx-1 hover:text-primary" href="/meetings">All Meetings</Link> | { }
                <Link className="mx-1 hover:text-primary" href="/meetings/current">Current Meeting</Link>
            </div>
            {children}
        </div>
    )
}