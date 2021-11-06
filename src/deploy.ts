import { REST } from "@discordjs/rest";
import fs from "fs";
import { Routes } from "discord-api-types/v9";
import { applicationId } from "./config.json";
import token from "../token.json";

/** Deploy the slash commands */
export default function deploy(): void {
  const commands = [];
  const rest = new REST({ version: "9" }).setToken(token);
  const commandFiles = fs
    .readdirSync("./src/commands")
    .filter((file) => file.endsWith(".ts"));

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
  }
  rest
    .put(Routes.applicationCommands(applicationId), {
      body: commands,
    })
    .catch(console.log);
}