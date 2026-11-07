import MeetingCardList from "@/components/MeetingCardList"
import MeetingDetail from "@/components/MeetingDetail";




export default async function MeetingDisplay(date:string | undefined){
    

    if(date === undefined){
        console.log("undefined")
        return(
                <div className="flex flex-col flex-gap-8 items-center">
                    <h1 className="text-4xl w-full text-forground dark:text-foreground text-center m2">All Meetings:</h1>
                    <div className="px-2 py-3 my-6">
                            <MeetingCardList></MeetingCardList>
                        
                    </div>
                </div>
            )
    }
    else{

        const origin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}`: "http://localhost:3000";
        const response = await fetch(`${origin}/api/meetings?date=${date}`);
        if(response.ok){
            const data = await response.json();

            if(data.meetings.length > 0){
                console.log(data.meetings);
                const meeting = data.meetings[0];
                return(
                <div>
                    <h1 className="text-4xl text-forground dark:text-foreground w-full text-center m-2">Meetings Details:</h1>
                    <div>
                        <MeetingDetail {...meeting}/>
                    </div>
                </div>
                    )
            }else{
                return(
                    <div><h1>Meeting Not found</h1></div>
                )
            }
            
        }

        
    }

    
}