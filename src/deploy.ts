import { REST } from "@discordjs/rest";
import fs from "fs";
import { Routes } from "discord-api-types/v9";
import { applicationId } from "./config.json";
import token from "../token.json";

/**
 * Deploy the slash commands
 * @returns success message if deployed
 */
export default function deploy(): void {
  /** @constant {any} - An array for storing commands */
  const commands = [];
  const rest = new REST({ version: "9" }).setToken(token);
  let done = false;
  if (!done) {
    // Prepare to deploy commands
    const commandFiles = fs
      .readdirSync("./src/commands")
      .filter((file) => file.endsWith(".ts"));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      commands.push(command.data.toJSON());
    }

    // Deploy the commands globally
    rest
      .put(Routes.applicationCommands(applicationId), {
        body: commands,
      })
      .catch(console.log);
    done = true;
  } 
  if (done) {
    return console.log("Successfully deployed the slash commands!");
  }
}
