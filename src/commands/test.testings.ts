import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { inlineCode } from "@discordjs/builders";
import util from "util";

const wait = util.promisify(setTimeout);

export = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test the bot!")
    .addStringOption((option) =>
      option
        .setName("option")
        .setDescription("What is your option string?")
        .setRequired(true)
    ),
  async execute(interaction: CommandInteraction) {
    const embed = new MessageEmbed();
    embed
      .setColor("#332191")
      .setTitle("")
      .setAuthor(
        `${interaction.user.username}`,
        `${interaction.user.displayAvatarURL({ format: "jpg" })}`
      )
      .setDescription(
        inlineCode(`It's ${Date.now() - interaction.createdTimestamp} ms`)
      );
    await interaction.channel?.sendTyping()
    await wait(1000)
    await interaction.reply({ embeds: [embed] });
  },
};
