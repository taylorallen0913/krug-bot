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
        const summonerDoesNotExist = new Discord.RichEmbed()
      .setColor(red)
      .setTitle("Summoner: " + args[0])
      .setDescription(
        'Summoner ' + args[0] + ' Was Not Found'
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTimestamp()
      .setFooter("© Krug Bot", client.user.avatarURL);

    message.channel.send(summonerDoesNotExist);


      } 
      else if (!err) {
        var profileIconId = json["profileIconId"];
        var summonerName = json["name"];
        var summonerLevel = json["summonerLevel"];
        var lastOnline = json["revisionDate"];

        var lastOnlineMs = parseInt(lastOnline)
        var d = new Date(lastOnlineMs);
        var date = (d.getMonth()+1 + '/' + d.getDate() + '/' + d.getFullYear());


        //embed
        const summonerEmbed = new Discord.RichEmbed()
          .setColor(green)
          .setTitle("Summoner: " + summonerName)
          .setAuthor(client.user.username, client.user.avatarURL)
          .setThumbnail('http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/' + profileIconId + '.png')
          .addField("Summoner Level", summonerLevel)
          .addField("Last Online", date)
          .setTimestamp()
          .setFooter("© Krug Bot", client.user.avatarURL);

        message.channel.send(summonerEmbed);
        
      }
    });
  } else {
    const notFormatted = new Discord.RichEmbed()
      .setColor(red)
      .setTitle("Summoner: " + args[0])
      .setDescription(
        "Please enter your command in the following format:\n!summoner <summoner name>"
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTimestamp()
      .setFooter("© Krug Bot", client.user.avatarURL);

    message.channel.send(notFormatted);
  }
};
