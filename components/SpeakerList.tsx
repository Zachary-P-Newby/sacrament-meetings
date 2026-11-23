import { SpeakerItem } from "@/lib/types";

interface SpeakerListProps {
  speakers: SpeakerItem[];
}

export default function SpeakerList({ speakers }: SpeakerListProps) {
  
  return (
    <ul>
      {speakers.map((speaker,index) => (
        
        speaker.type === "speaker"
          ? <li key={index}>{speaker.name} - {speaker.topic}</li>
          : <li key={index}>{speaker.name} - Musical Number</li>
      ))}
    </ul>
  );
}