export type MeetingType =
  | 'testimony'
  | 'regular'
  | 'stake'
  | 'general';

export interface Hymn {
  number: number;
  title: string;
}

export interface SpeakerItem {
  id:number,
  name: string;
  topic: string;
  type: 'speaker' | 'musical-number';
}

export interface WardBusinessItem {
  description: string;
}

export interface SacramentMeeting {
  id: number;
  date: string;              // ISO date string: 'YYYY-MM-DD'
  meetingType: MeetingType;
  presiding: string;
  conducting: string;
  announcements?: string[];
  openingHymn: Hymn;
  openingPrayer: string;
  wardBusiness: WardBusinessItem[];
  stakeBusiness: boolean;
  sacramentHymn: Hymn;
  speakers: SpeakerItem[];
  closingHymn: Hymn;
  closingPrayer: string;
}

export function formatMeetingType(meetingType:MeetingType):string{
  switch(meetingType) {  
    case "testimony":  
      return "Fast and Testimony Meeting";   
    case "general":  
      return "General Meeting"    
    case "regular":  
      return "Sacrament Meeting";
    case "stake":  
      return "Stake Sacrament Meeting";    
    default:  
      return "Sacrament Meeting"; 
  }
}

export function getThisSunday():string{
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  return `${sunday.getFullYear()}-${sunday.getMonth()+1}-${sunday.getDate()}`
}