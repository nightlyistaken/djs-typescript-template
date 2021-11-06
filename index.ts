import { Client, Intents, Collection } from "discord.js";
import fs from "fs";
import token from "./token.json";

// Clear the console for a better view
console.clear();

/** @constant {Client} - The main client */
export const client = new Client({
  partials: ["CHANNEL"],
  /** 32767 means all intents */
  intents: 32767,
});

(client as any).commands = new Collection();

// The handler for events
const eventFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".ts"));

for (const file of eventFiles) {
  const event = require(`./src/events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Some events that do not need seperate files
client
  .on("disconnect", () => console.log("Disconnecting..."))
  .on("reconnecting", () => console.log("Reconnecting..."));

// login with the imported token
client.login(token);
