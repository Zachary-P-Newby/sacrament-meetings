import { SpeakerItem } from "@/lib/types";

interface SpeakerListProps {
  speakers: SpeakerItem[];
}

export default function SpeakerList({ speakers }: SpeakerListProps) {
  
  return (
    <ul>
      {speakers.map((speaker) => (
        
        speaker.type === "speaker"
          ? <li key={speaker.name}>{speaker.name} - {speaker.topic}</li>
          : <li key={speaker.name}>{speaker.name} - Musical Number</li>
      ))}
    </ul>
  );
}