import { ClientEvents } from "discord.js";

// Event
type TypeEvent = keyof ClientEvents;
export interface Event {
    name: TypeEvent,
    once: boolean,
    execute(...args: any[]): any | Promise<any>
}
