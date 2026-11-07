import type { SacramentMeeting } from "./types";


const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-11-1',
    meetingType: 'testimony',
    presiding: 'Bishop Jensen',
    conducting: 'Brother Marsmaker',
    openingHymn: { number: 7, title: 'Israel, Israel God is Calling' },
    openingPrayer: 'Sister Hatfield',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "As Now We Take the Sacrament" },
    speakers: [
      
    ],
    closingHymn: { number: 138, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: undefined
  },
  
  {
    id: 2,
    date: '2026-11-8',
    meetingType: 'regular',
    presiding: 'Brother Matthas',
    conducting: 'Brother Matthas',
    openingHymn: { number: 97, title: 'Lead, Kindly Light' },
    openingPrayer: 'Brother Williams',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 185, title: "Reverently and Meekly Now" },
    speakers: [
      { id:0,name: 'Sister Brown', topic: 'Faith', type: 'speaker' },
      { id:1,name: 'Brother Greene', topic: 'Repentance', type: 'speaker' },
      { id:2,name: 'Sister White', topic: 'Baptisim and the Holy Ghost', type: 'speaker' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Grimes',
    announcements: ['Ward temple night: Nov 13']
  },
  {
    id: 3,
    date: '2026-11-15',
    meetingType: 'regular',
    presiding: 'Bishop Jensen',
    conducting: 'Brother Marsmaker',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Anthony',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 183, title: "In Remembrance of Thy Suffering" },
    speakers: [
     { id:0,name: 'Sister Seavy', topic: 'Charity', type: 'speaker' },
    { id:1,name: 'Brother Newby', topic: 'Inviting the Holy Spirit', type: 'speaker'}
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Anthony',
    announcements: undefined
  },

  {
    id: 4,
    date: '2026-11-22',
    meetingType: 'stake',
    presiding: 'President Sheppard',
    conducting: 'Bishop Jensen',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 171, title: "With Humble Heart" },
    speakers: [
      { id:0,name: 'Sister Allred', topic: 'Prayer', type: 'speaker' },
      { id:1,name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Cooper',
    announcements: undefined
  },
  {
    id: 5,
    date: '2026-11-29',
    meetingType: 'regular',
    presiding: 'Bishop Jensen',
    conducting: 'Brother Jones',
    openingHymn: { number: 55, title: 'Lo the Mighty God Appearing' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 184, title: "Upon the Cross of Calvary" },
    speakers: [
      { id:0,name: 'Sister Hinds', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { id:1,name: 'Sister Thomas', topic: 'The New Testament', type: 'speaker' },
      { id:2,name: 'Sister Stallings', topic: 'Fasting', type: 'speaker' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: undefined
  },
  {
    id: 6,
    date: '2026-12-6',
    meetingType: 'testimony',
    presiding: 'Bishop Jensen',
    conducting: 'Brother Marsmaker',
    openingHymn: { number: 201, title: 'Joy to the World' },
    openingPrayer: 'Sister Newby',
    wardBusiness: [{ description: 'Release and Sustaining of old and new Relief Society Presidents' }],
    stakeBusiness: false,
    sacramentHymn: { number: 196, title: "Jesus, Once of Humble Birth" },
    speakers: [],
    closingHymn: { number: 203, title: 'Angels We Have Heard on High' },
    closingPrayer: 'Brother Newby',
    announcements: ['Christmas Food Drive: Dec 19']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    console.log(date);
    if (date) return meetings.filter(m=>m.date === date);
    return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find(m=> m.id === id) ?? null;
}