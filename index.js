const Discord = require('discord.js')
const client = new Discord.Client()
var moment = require('moment');
moment().format();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


var alertTime = "07:00:00";
var now = null;

setInterval(function () {
	now = moment().format("HH:mm:ss");
	if (now == alertTime) {
		var date = new Date();
		var day = date.getDay();
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var dayName = days[day];
		var sayings = ['Today is ', 'Hey everyone its ', 'Need more coffee?  It must be ', 'I think its ', 'btw its ', 'How is it already ' ];
		var random = Math.floor((Math.random() * 5) + 1);
		var todayText = sayings[random];
				
		client.channels.get("494924705942208523").send(todayText + dayName + '.')  

	}
	}, 1000);
		

client.login('INSERT TOKEN HERE')
