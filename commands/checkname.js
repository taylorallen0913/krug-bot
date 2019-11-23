const Discord = require("discord.js");
const request = require("request");
const apiKey = "RGAPI-1fb30152-09d0-4eb8-b0c7-8c776b3b2e70";
const red = "#e60000";
const green = "#49c33a";

exports.run = (client, message, args) => {
  if (args.length === 1) {
    var URL =
      "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      args[0] +
      "?api_key=" +
      apiKey;
    request(URL, function(err, response, body) {

      var json = JSON.parse(body);

      if (json["status"]) {
        const doesNameExist = new Discord.RichEmbed()
        .setColor(green)
        .setTitle("Check Name: " + args[0])
        .setDescription("Summoner name is not taken.")
        .setAuthor(client.user.username, client.user.avatarURL)
        .setTimestamp()
        .setFooter("© Krug Bot", client.user.avatarURL);
        message.channel.send(doesNameExist);
      } 
      
      else {
        const doesNameExist = new Discord.RichEmbed()
        .setColor(green)
        .setTitle("Check Name: " + args[0])
        .setDescription('Summoner name is taken.')
        .setAuthor(client.user.username, client.user.avatarURL)
        .setTimestamp()
        .setFooter("© Krug Bot", client.user.avatarURL);
        message.channel.send(doesNameExist);
      }

    });
  } else {
    const notFormatted = new Discord.RichEmbed()
      .setColor(red)
      .setTitle("Check Name: " + args[0])
      .setDescription(
        "Please enter your command in the following format:\n!checkname <summoner name>"
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTimestamp()
      .setFooter("© Krug Bot", client.user.avatarURL);

    message.channel.send(notFormatted);
  }
};
