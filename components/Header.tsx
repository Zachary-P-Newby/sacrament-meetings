import Navlinks from "./NavLinks"
import CurrentDate from "./CurrentDate"
import { Suspense } from "react"


export default function Header(){
    
    return(

        <header className="min-h-24 m-0 px-4 py-2 bg-accent flex flex-row  justify-between text-center items-center sm:flex-col max-sm:flex-col">
            <div className="px-1 py-2 inline flex-1 text-background dark:text-foreground" id="dateDiv">
                <Suspense fallback={<div><h1>Loading Date</h1></div>}>
                    <CurrentDate/>
                </Suspense>    
            </div>
            <div className="px-1 py-2 inline text-center flex-1">
                <h1 className="font-barlow font-bold text-3xl text-background dark:text-foreground">
                    Carl Junction Ward
                </h1>
            </div>
            <div id="navlinksDiv" className="px-1 py-2 inline flex flex-row flex-1 sm:flex-col sm:flex-gap-4">
                <Suspense>
                    <Navlinks page="/" displayName="Home"/> | { }
                    <Navlinks page="/meetings" displayName="Meetings"/>
                </Suspense>
                
            </div>
        </header>

    )
}