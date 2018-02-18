const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '#'

client.on('ready', () => {
  console.log('Бот загружен!');
  client.user.setActivity('BF4-PAIN.RU | #help')
})
  client.on('guildMemberAdd', (member) => {
  member.user.send("message");
});

  

client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'site')) {
        message.channel.send({embed: {
        color: 3447003,
        description: 'Адрес нашего сайта http://bf4-pain.ru'
		}});
     }
});

client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.send({embed: {
        color: 3447003,
        description: 'Список команд:\n #site - отобразить адрес нашего сайта,\n #admins - администраторы сервера,\n #ping - узнать свой ping, \n #info - полезные ссылки'
		}});
     }
});


client.on('message', message => {
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
});


client.on('message', message => {
    if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'admins')) {
        message.channel.send({embed: {
        color: 3447003,
        description: 'Администраторы нашего сервера: @Vi7aLiY, @Meteor480, @Wiking, @SAV, @Mico '
		}});
    }
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send({embed: {
        color: 3447003,
        description: 'Твой пинг: ' + client.ping + ' мс.'
		}});
    }
});


client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'мой аватар') {
    // Send the user's avatar URL
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