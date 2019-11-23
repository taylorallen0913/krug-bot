const Discord = require('discord.js');
const config = require('./config.json');
const request = require('request');
const Enmap = require('enmap')
const channel = '646888789720956929';
const fs = require('fs');

const client = new Discord.Client();
client.config = config;

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err,files) => {
  if(err)
    return console.error(err);
    files.forEach(file => {
      // If the file is not a JS file, ignore it
      if(!file.endsWith(".js"))
        return;
      // Load the event file itself
      const event = require(`./events/${file}`);
      // Get just the event name from the file name
      let eventName = file.split(".")[0];
      // Event will be called with client arguement, followed by its "normal" arguments,
      // like messages, member, etc.
      client.on(eventName, event.bind(null,client));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
});

// This loops is for the commands itself
client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    client.commands.set(commandName, props);
  });
});

client.login(config.token);

