![alternate text](https://github.com/taylorallen0913/krug-bot/blob/master/KrugBotLogo.png)

# KrugBot

KrugBot is a discord bot that aims to provide easy access to League Of Legends statistics. This is done by fetching data from the RiotAPI and outputting the results to the user, in an easy to read, simplistic way.

## To-Do List
* [ ]  Make API key and discord token a global .env variable
* [ ]  Create !help command
* [ ]  Implement database and log summoner name to user; use mongodb for backend

## Command List

Search summoner by name
```
!summoner <summoner name>
```
Check if summoner name is available
```
!checkname <summoner name>
```

# Community Discord
https://discord.gg/mDwTQ3J

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

What things you need to install the software and how to install them

```
node >= v13.1.0
npm >= v6.12.1
```

### Installing

A step by step series of examples that tell you how to get a development env running

First, clone the repository onto your local system

```
git clone https://github.com/taylorallen0913/krug-bot 
```

Install all npm packages required

```
npm install
```
Create a .env file in source folder; add your discord token and riot api key

```
DISCORD_TOKEN = <your discord token>
APIKEY = <your riotapi key>
```
To start the bot, run this command

```
node index.js
```
To stop the bot, enter this keystroke
```
CTRL + C
```

## Built With

* [npm](https://www.npmjs.com/) - Javascript package installer
* [Node.js](https://nodejs.org/en/docs/) - Javascript server environment
* [Discord.js](https://discord.js.org/#/) - Javascript library for the Discord API
* [Requst](https://www.npmjs.com/package/request) - Javascript library for fetching data from APIs

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/taylorallen0913/d7385e49ab82529b7e65e5fe1c752709) for details on our code of conduct, and the process for submitting pull requests to us. 

## Authors

* **Taylor Allen** - *Initial work* - [taylorallen0913](https://github.com/taylorallen0913)

See also the list of [contributors](https://github.com/taylorallen0913/krug-bot/network/dependencies) who participated in this project.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br />
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* A big inspiration to this project was the League of Legends site, OP.GG. OP.GG is a site which utilizes the Riot API for summoner searching. This project was started because I wanted to make that data more accessable to the general public because a lot of gamers use Discord and may not want to go through the hassle of the ads and nonsense present in using a browser.

