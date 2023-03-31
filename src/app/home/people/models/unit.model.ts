import { MeetingNotes } from "./meeting-notes.model";

export interface Unit {
    id: string;
    name: string;
    people: Person[];
}

export interface Person {
    id: string;
    name: string;
    meetings: MeetingNotes[];
}