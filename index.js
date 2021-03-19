const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs");

client.comandos = new Discord.Collection()

let archivos = fs.readdirSync("./comandos").filter((f) => f.endsWith(".js"))


for(var archi of archivos) {
    let comando = require("./comandos/"+archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi+" fue cargado correctamente.")
}

client.on('message', async message =>{
    let rol = message.guild.roles.cache.find(role => role.name === "Links")
    if(message.member.roles.cache.get(rol.id)) return;
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if (!message.guild) return; 

    if(message.content.includes("http://")){
      message.delete().catch()
      const link = new Discord.MessageEmbed()
      .setTitle("LINK")
      .setColor("RED")
      .setDescription("No puedes mandar links sin el permiso de los administradores. Para poder hacerlo píde tu rango `Links`")
      .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`, { dynamic: true})
      return message.channel.send(link)
    }
    if(message.content.includes("https://")){
      message.delete().catch()
      const link = new Discord.MessageEmbed()
      .setTitle("LINK")
      .setColor("RED")
      .setDescription("No puedes mandar links sin el permiso de los administradores. Para poder hacerlo píde tu rango `Links`")
      .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`, { dynamic: true})
      return message.channel.send(link)
    }
    if(message.content.includes("https://discord.gg")){
      let dc = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("LINK")
      .setDescription("Si quieres mandar un link de Discord, asegúrate de hacerlo en mensaje directo.")
      .setThumbnail("https://cdn.discordapp.com/attachments/806615412271611934/822574291660570654/512px-Font_Awesome_5_brands_discord_color.png")
      message.delete().catch()
      return message.channel.send(dc)
    }
    if(message.content.includes("https://www.youtube.com")){
      let yt = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("LINK")
      .setDescription("Si quieres mandar un link de YouTube, asegúrate de hacerlo en mensaje directo, o de usar el comando `ma!yt` de <@810250417282744390>")
      .setThumbnail("https://cdn.discordapp.com/attachments/806615412271611934/822576450703589416/youtube-logo-5-2.png")
      message.delete().catch()
      return message.channel.send(yt)
    }
    if(message.content.includes("https://www.twitch.tv")){
      let tt = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("LINK")
      .setDescription("Si quieres mandar un link de Twitch, asegúrate de hacerlo en mensaje directo.")
      .setThumbnail("https://cdn.discordapp.com/attachments/806615412271611934/822577348523327509/580b57fcd9996e24bc43c540.png")
      message.delete().catch()
      return message.channel.send(tt)
    }
    
})

client.on("ready", async() => {
    console.log("a")
    await client.user.setActivity("Hololive", {
      url: "https://www.twitch.tv/jotis_1",
      type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
    });
  
})

client.login(process.env.TOKEN)


