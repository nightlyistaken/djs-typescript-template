import { Client, Intents, Collection } from "discord.js";
import fs from "fs";

// The file where the token is stored
import token from "./token.json";
// Clear the console for a better view
console.clear();

export const client = new Client({
  partials: ["CHANNEL"],
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});
(client as any).commands = new Collection();

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

client
  .on("disconnect", () => console.warn("Disconnecting..."))
  .on("reconnecting", () => console.info("Reconnecting..."));

client.login(token);