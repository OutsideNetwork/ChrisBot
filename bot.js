const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Estoy listo!");
    
    client.user.setPresence( {
        status: "online",
        game: {
            name: "iOmegx me la pela",
            type: "PLAYING"
        }
    } );
 
 });
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "test")) {
    message.channel.send("Test Valido!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola que tal?"); 
    } else
    if (message.content.startsWith(prefix +"estado")){
        message.channel.send({embed: {
          color: 3447003,
          description: "Jugando a iOmegx me la pela"
        }});
    }

  

  if (message.content.startsWith(prefix + "stats")) {



  const embed = new Discord.RichEmbed()
  .setColor(0x66ff66)

  .setAuthor('Bot info', client.user.avatarURL)
  .addField('Dueño', 'Christopher', true)
  .addField('Version', '1.0.0', true)
  .addField('Libreria', 'ChrisBot 1.0.0 beta(Js)', true)

  .addField('Memoria', '1.87 MB')
  .addField('Uptime', 'content.startsWitch.minutes.online.command, true', true)
  .addField('Servidores', '2', true)

  .addField('Usuarios', '45', true)
  .addField('Conexiones', '1', true)


  message.channel.send({embed});





  }}



    
    
);
client.login(config.token); 