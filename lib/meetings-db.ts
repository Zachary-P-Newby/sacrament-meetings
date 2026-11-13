import type { SacramentMeeting } from "./types";
import { neon } from '@neondatabase/serverless';

const sql= neon(process.env.DATABASE_URL!)

//changed to better work with my css
const ITEMS_PER_PAGE = 6




//I initially used the course version before modifying it on my own and then asking AI how to check if a date parameter matched the meeting date to satisfy the api/meetings?date= route
export async function getMeetings(
  query: string = '',
  currentPage: number = 1,
  meetingDate: string | null = null
): Promise<SacramentMeeting[]> {
  const searchTerm = `%${query}%`;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS "date",
      meeting_type                AS "meetingType",
      presiding, conducting, announcements,
      opening_hymn                AS "openingHymn",
      opening_prayer              AS "openingPrayer",
      ward_business               AS "wardBusiness",
      stake_business              AS "stakeBusiness",
      sacrament_hymn              AS "sacramentHymn",
      speakers,
      closing_hymn                AS "closingHymn",
      closing_prayer              AS "closingPrayer"
    FROM meetings
    WHERE
      (
        presiding ILIKE ${searchTerm}
        OR conducting ILIKE ${searchTerm}
        OR meeting_type ILIKE ${searchTerm}
        OR speakers::text ILIKE ${searchTerm}
      )
      AND (${meetingDate}::date IS NULL OR date = ${meetingDate}::date)
    ORDER BY date DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

  return rows as unknown as SacramentMeeting[];
}

export async function getMeetingsTotalPages(
  query: string = ''
): Promise<number> {
  const searchTerm = `%${query}%`;
  const rows = await sql`
    SELECT COUNT(*) FROM meetings
    WHERE
      presiding     ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm}
  `;
  return Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
}

export async function getMeetingById(
  id: number
): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS "date",
      meeting_type                AS "meetingType",
      presiding, conducting, announcements,
      opening_hymn                AS "openingHymn",
      opening_prayer              AS "openingPrayer",
      ward_business               AS "wardBusiness",
      stake_business              AS "stakeBusiness",
      sacrament_hymn              AS "sacramentHymn",
      speakers,
      closing_hymn                AS "closingHymn",
      closing_prayer              AS "closingPrayer"
    FROM meetings WHERE id = ${id}
  `;
  return (rows[0] as unknown as SacramentMeeting) ?? null;
}

export async function getMeetingIdByDate(
  date: string
): Promise<number | null> {
  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS "date",
      meeting_type                AS "meetingType",
      presiding, conducting, announcements,
      opening_hymn                AS "openingHymn",
      opening_prayer              AS "openingPrayer",
      ward_business               AS "wardBusiness",
      stake_business              AS "stakeBusiness",
      sacrament_hymn              AS "sacramentHymn",
      speakers,
      closing_hymn                AS "closingHymn",
      closing_prayer              AS "closingPrayer"
    FROM meetings WHERE to_char(date, 'YYYY-MM-DD') = ${date}
  `;
  const meeting = rows[0] as { id?: number } | undefined; return meeting?.id ?? null;
}





// Mutation stubs — will be wired to the database in Week 04
export async function addMeeting(
  data: Omit<SacramentMeeting, 'id'>
): Promise<SacramentMeeting> {
  throw new Error('addMeeting: database implementation coming in Week 04');
}

export async function updateMeeting(
  id: number,
  updates: Partial<SacramentMeeting>
): Promise<SacramentMeeting | null> {
  throw new Error('updateMeeting: database implementation coming in Week 04');
}

export async function deleteMeeting(id: number): Promise<boolean> {
  throw new Error('deleteMeeting: database implementation coming in Week 04');
}



/*
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

*/