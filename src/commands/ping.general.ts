import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { inlineCode } from "@discordjs/builders";

export = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check your ping!"),
  async execute(interaction : CommandInteraction) {
    const embed = new MessageEmbed();
    embed
      .setColor("#332191")
      .setTitle("Pong! :tennis:")
      .setAuthor(
        `${interaction.user.username}`,
        `${interaction.user.displayAvatarURL({ format: "jpg" })}`
      )
      .setDescription(inlineCode(`It's ${Date.now() - interaction.createdTimestamp} ms`));
    await interaction.reply({ embeds: [embed] })
  },
};