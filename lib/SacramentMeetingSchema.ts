
import { z } from "zod";

  //duck ai used to generate schema based on types.ts file
  
  export const MeetingTypeSchema = z.enum([
    "testimony",
    "regular",
    "stake",
    "general",
  ]);
  
  export const HymnSchema = z.object({
    number: z.number().int(),
    title: z.string().min(5).max(30),
  });
  
  export const SpeakerItemSchema = z.object({
    id: z.number().int(),
    name: z.string().min(5).max(50),
    type: z.enum(["speaker", "musical-number"]),
    topic: z.string().max(30)
  }).superRefine(({type}, ctx) =>{
    if(type==="speaker"){
      ctx.addIssue({
        code: "custom",
        path: ["topic"],
        message: "topic must be at least 5 characters" 
      })
    };
  });



  export const WardBusinessItemSchema = z.object({
    description: z.string().min(5).max(50),
  });
  
  export const SacramentMeetingSchema = z.object({
    id: z.number().int().optional(),
    date: z.string().refine(
      (value) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
        const date = new Date(`${value}T00:00:00Z`);
        return !Number.isNaN(date.getTime()) &&
          date.toISOString().slice(0, 10) === value;
      },
      { message: "Expected a valid ISO date in YYYY-MM-DD format" },
    ),
    meetingType: MeetingTypeSchema,
    presiding: z.string().min(5).max(50),
    conducting: z.string().min(5).max(50),
    announcements: z.array(z.string()).optional().default([]),
    openingHymn: HymnSchema,
    openingPrayer: z.string().min(5).max(50),
    wardBusiness: z.array(WardBusinessItemSchema).default([]),
    stakeBusiness: z.boolean(),
    sacramentHymn: HymnSchema,
    speakers: z.array(SpeakerItemSchema),
    closingHymn: HymnSchema,
    closingPrayer: z.string().min(5).max(50),
  });
  
  export type MeetingType = z.infer<typeof MeetingTypeSchema>;
  export type Hymn = z.infer<typeof HymnSchema>;
  export type SpeakerItem = z.infer<typeof SpeakerItemSchema>;
  export type WardBusinessItem = z.infer<typeof WardBusinessItemSchema>;
  export type SacramentMeeting = z.infer<typeof SacramentMeetingSchema>;
  
  export type State = {
    errors?: {
      date?: string[];
      meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];
    openingHymn?: string[];
    openingPrayer?: string[];
    wardBusiness?: string[];
    stakeBusiness?: string[];
    sacramentHymn?: string[];
    speakers?: string[];
    closingHymn?: string[];
    closingPrayer?: string[];
    };
    message?: string | null;
  };
