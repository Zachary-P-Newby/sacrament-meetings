import { SpeakerItem } from "@/lib/types";

interface SpeakerListProps {
  speakers: SpeakerItem[];
}

export default function SpeakerList({ speakers }: SpeakerListProps) {
  return (
    <ul>
      {speakers.map((speaker) => (
        speaker.type === "speaker"
          ? <li key={speaker.id}>{speaker.name} - {speaker.topic}</li>
          : <li key={speaker.id}>{speaker.name} - Musical Number</li>
      ))}
    </ul>
  );
}