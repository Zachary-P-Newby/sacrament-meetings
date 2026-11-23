"use server"
import { addMeeting as addMeetingQuery, updateMeeting as updatMeetingQuery, deleteMeeting as deleteMeetingQuery} from "./meetings-db";
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import { SpeakerItem, SacramentMeeting } from "./types";
import { SacramentMeetingSchema, State } from "./SacramentMeetingSchema";


export async function createMeeting(
    previousState: State,
    formData: FormData
    ): Promise<State | void> {
    
    let announcements: string[] = [];
    if(formData.get("announcements")){
        const announcementsRaw = formData.get("announcements");
        announcements = announcementsRaw ? announcementsRaw.toString().split(",") : [] ;
    }

    const wardBusiness: object[] = [];
    if(formData.get("ward-business")){
        const wardBusinessRaw = formData.get("ward-business")?.toString().split(",") ;
        wardBusinessRaw?.forEach((item)=>{
            wardBusiness.push({description:item});
        });

    }

    const rawSpeakers = formData.get("speakers");
    const speakers: SpeakerItem[] = JSON.parse(String(rawSpeakers ?? "[]"));


    const rawData={
        date: formData.get("meeting-date"),
        meetingType: formData.get("meeting-type"),
        presiding: formData.get("presiding-member"),
        conducting: formData.get("conductor"),
        announcements: announcements,
        openingHymn: {number: parseInt(formData.get("opening-hymn-number")?.toString() ?? "0"), title: formData.get("opening-hymn-title")?.toString()},
        openingPrayer: formData.get("opening-prayer"),
        wardBusiness: wardBusiness,
        stakeBusiness: formData.get("stake-business") ? true : false,
        sacramentHymn: {number: parseInt(formData.get("sacrament-hymn-number")?.toString() ?? "0"), title: formData.get("sacrament-hymn-title")?.toString()},
        speakers: speakers,
        closingHymn: {number: parseInt(formData.get("closing-hymn-number")?.toString() ?? "0"), title: formData.get("closing-hymn-title")?.toString()},
        closingPrayer: formData.get("closing-prayer")
    }
  
    console.log("Validating...");
    const validatedData = SacramentMeetingSchema.safeParse(rawData);
    
    if (validatedData.success) {
        console.log(validatedData.success);
        let meeting: SacramentMeeting | null;
        try{
            meeting = await addMeetingQuery(validatedData.data);
        }catch(err){
            console.error("Error: ", err);
            return {message: 'Database Error Failed to create meeting.'};
        }
        revalidatePath("/meetings");
        redirect(`/meetings/${meeting.id}`);
        
    }
    else{

        return {
      errors: validatedData.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create meeting.',
        };
    }


};

export async function updateMeeting(
    id: string,
    previousState: State,
    formData: FormData
    ): Promise<State> {
    let announcements: string[] = [];
    if(formData.get("announcements")){
        const announcementsRaw = formData.get("announcements");
        announcements = announcementsRaw ? announcementsRaw.toString().split(",") : [] ;
    }

    const wardBusiness: object[] = [];
    if(formData.get("ward-business")){
        const wardBusinessRaw = formData.get("ward-business")?.toString().split(",") ;
        wardBusinessRaw?.forEach((item)=>{
            wardBusiness.push({description:item});
        });

    }

    const rawSpeakers = formData.get("speakers");
    const speakers: SpeakerItem[] = JSON.parse(String(rawSpeakers ?? "[]"));



    const rawData={
        id: parseInt(id),
        date: formData.get("meeting-date"),
        meetingType: formData.get("meeting-type"),
        presiding: formData.get("presiding-member"),
        conducting: formData.get("conductor"),
        announcements: announcements,
        openingHymn: {number: parseInt(formData.get("opening-hymn-number")?.toString() ?? "0"), title: formData.get("opening-hymn-title")?.toString()},
        openingPrayer: formData.get("opening-prayer"),
        wardBusiness: wardBusiness,
        stakeBusiness: formData.get("stake-business") ? true : false,
        sacramentHymn: {number: parseInt(formData.get("sacrament-hymn-number")?.toString() ?? "0"), title: formData.get("sacrament-hymn-title")?.toString()},
        speakers: speakers,
        closingHymn: {number: parseInt(formData.get("closing-hymn-number")?.toString() ?? "0"), title: formData.get("closing-hymn-title")?.toString()},
        closingPrayer: formData.get("closing-prayer")
    }
  

    const validatedData = SacramentMeetingSchema.safeParse(rawData);
    

    if (validatedData.success) {
        
        let meeting: SacramentMeeting | null;
            
        try{
            meeting = await updatMeetingQuery(validatedData.data.id || parseInt(id), validatedData.data);
            
        }catch(err){
            console.error("Error: ", err);
            return {message: 'Database Error Failed to create meeting.'};
        }

        revalidatePath("/meetings");
        redirect(`/meetings/${meeting?.id}`);

    }
    else{
        
        return {
      errors: validatedData.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to update meeting.',
        };
    }
};



export async function deleteMeeting(id: string){
  if(id){
    try {
        await deleteMeetingQuery(parseInt(id));
        }
    catch(err){
        console.error(err);
    }
    revalidatePath("/meetings");
        redirect('/meetings');
  }else{
    
    throw new Error('Could not delete meeting, please try again later.');
    }
};





