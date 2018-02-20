const Discord = require('discord.js');

const client = new Discord.Client();

<<<<<<< HEAD
// Префикс для бота
const config = require('./config.json');
const availableVariables = ['site_url', 'ts3_url', 'prefix', 'youtube_url', 'steam_link'];
=======
var prefix = '#'
>>>>>>> parent of 4c30bf9... BeautyFy the code

client.on('ready', () => {
  console.log('Бот загружен!');
  client.user.setActivity('BF4-PAIN.RU | #help')
})
  client.on('guildMemberAdd', (member) => {
  member.user.send("message");
});

  

client.on('message', message => {
<<<<<<< HEAD
  if (message.author === client.user) return;
  if (message.content.startsWith(config.prefix + 'site')) {
    message.channel.send({
      embed: {
=======
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'site')) {
        message.channel.send({embed: {
>>>>>>> parent of 4c30bf9... BeautyFy the code
        color: 3447003,
        description: 'Адрес нашего сайта http://bf4-pain.ru'
		}});
     }
});

client.on('message', message => {
<<<<<<< HEAD
  if (message.author === client.user) return;
  if (message.content.startsWith(config.prefix + 'help')) {
    message.channel.send({
      embed: {
=======
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.send({embed: {
>>>>>>> parent of 4c30bf9... BeautyFy the code
        color: 3447003,
        description: 'Список команд:\n #site - отобразить адрес нашего сайта,\n #admins - администраторы сервера,\n #ping - узнать свой ping, \n #info - полезные ссылки'
		}});
     }
});


client.on('message', message => {
<<<<<<< HEAD
  if (message.author === client.user) return;
  if (message.content.startsWith(config.prefix + 'info')) {
    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Сайт игрового сообщества PAIN",
        url: "http://bf4-pain.ru",
        description: "**__Полезные ссылки__**",
        fields: [{
            name: "О нас",
            value: "http://bf4-pain.ru/#about_us"
          },
          {
            name: "Условия приема",
            value: "http://bf4-pain.ru/#terms"
          },
          {
            name: "Мы в STEAM",
            value: "http://steamcommunity.com/groups/pain_community"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© 2014-2018 **ИГРОВОЕ СООБЩЕСТВО PAIN**"
        }
      }
    });
  }
=======
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'info')) {
        message.channel.send({embed: {
		color: 3447003,
		author: {
		  name: client.user.username,
		  icon_url: client.user.avatarURL
		},
		title: "Сайт игрового сообщества PAIN",
		url: "http://bf4-pain.ru",
		description: "**__Полезные ссылки__**",
		fields: [{
			name: "О нас",
			value: "http://bf4-pain.ru/#about_us"
		  },
		  {
			name: "Условия приема",
			value: "http://bf4-pain.ru/#terms"
		  },
		  {
			name: "Мы в STEAM",
			value: "http://steamcommunity.com/groups/pain_community"
		  }
		],
		timestamp: new Date(),
		footer: {
		  icon_url: client.user.avatarURL,
		  text: "© 2014-2018 **ИГРОВОЕ СООБЩЕСТВО PAIN**"
		}
	  }
	});
     }
>>>>>>> parent of 4c30bf9... BeautyFy the code
});


client.on('message', message => {
<<<<<<< HEAD
  if (message.author === client.user) return;
  if (message.content.startsWith(config.prefix + 'admins')) {
    message.channel.send({
      embed: {
=======
    if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'admins')) {
        message.channel.send({embed: {
>>>>>>> parent of 4c30bf9... BeautyFy the code
        color: 3447003,
        description: 'Администраторы нашего сервера: @Vi7aLiY, @Meteor480, @Wiking, @SAV, @Mico '
		}});
    }
});

client.on('message', message => {
<<<<<<< HEAD
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  if (message.content.startsWith(config.prefix + 'ping')) {
    message.channel.send({
      embed: {
=======
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send({embed: {
>>>>>>> parent of 4c30bf9... BeautyFy the code
        color: 3447003,
        description: 'Твой пинг: ' + client.ping + ' мс.'
		}});
    }
});


client.on('message', message => {
<<<<<<< HEAD
  if (message.author === client.user) return;
  if (message.content.startsWith(config.prefix + 'avatar')) {
    // Выводим URL аватара в чат
=======
  // If the message is "what is my avatar"
  if (message.content === 'мой аватар') {
    // Send the user's avatar URL
>>>>>>> parent of 4c30bf9... BeautyFy the code
    message.reply(message.author.avatarURL);
  }
});


// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Добро пожаловать на наш сервер, ${member}`);
});

client.login(process.env.BOT_TOKEN);