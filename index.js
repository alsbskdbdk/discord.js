const Discord = require('discord.js'),
    client = new Discord.Client({
        partials: ['MESSAGE', 'REACTION']
    }),
    config = require('./config.json'),
    fs = require('fs')
    client.once('ready', () => {
        console.log('Ready!');
    });


client.login(config.token)
client.commands = new Discord.Collection()
let prefix = "!"
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
 
client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utilisée que dans un serveur.')
    command.run(message, args, client)
})
 
client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(`${member}`, new Discord.MessageEmbed()
        .setDescription(`${member} a rejoint le serveur Hammer😈. Nous sommes désormais ${member.guild.memberCount} ! 🎉`)
        .setColor('#00ff00'))
    member.roles.add(config.greeting.role)
})
 
client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setDescription(`${member.user.tag} a quitté le serveur le serveur Hammer😈🚆`)
        .setColor('#ff0000'))
})
client.on('ready', () => {
    const statuses = [
        () => `${client.guilds.cache.size} serveurs`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
})

client.on('message', async (message) => {
    const args = message.content.split(" ")
    const expr = (message.content.slice(0, 1) === prefix ? args[0].slice(1, args[0].length) : false)
    switch(expr){
      case "romain" :
        message.reply("PATATE")
      break
      
      case "staff" :
    
        message.delete()
       
      
        var guild = client.guilds.cache.get("762294234316275723")
        
        const Alphabetic_Filter = function(a, b) {
            var textA = a.displayName;
            var textB = b.displayName;
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }
      
        var fonda = guild.roles.cache.get("767744806117441596").members.array().sort(Alphabetic_Filter)
        var admin = guild.roles.cache.get("767744806814220309").members.array().sort(Alphabetic_Filter)
        
      
        const num_all = fonda.length + admin.length
      
        const staffs = new Discord.MessageEmbed()
            .setAuthor("🎊| Hammer😈 ", client.user.avatarURL)
            .setTitle("Liste des Staff de 🎊|Hammer")
            .setThumbnail('https://cdn.discordapp.com/attachments/767748851737690194/767764824032673872/voice_1.png')
            .addField("Fondateur", `${(fonda.join("\n")+"_ _")}`,false)
            .addField("Administrateur", `${(admin.join("\n")+"_ _")}`,false,)
            .setFooter(`Demandé par ${message.author.username} Il y a ${num_all} staff  🎉|Hammer😈 .`)
            .setColor("rouge")
            
        message.channel.send(staffs).then(m => m.delete(1*1*1));
        
  
        
  
        
    
      break
  
      
    
  
  
   default :
   if(!expr){return} 
   const bmbed = new Discord.MessageEmbed()
  
  }
  })
  client.on("raw", event => {
    if(event.t === "MESSAGE_REACTION_ADD"){
        if (event.d.message_id == "767747166864277544"){
             let member = client.guilds.cache.get(event.d.guild_id).members.cache.get(event.d.user_id)
  
             if(event.d.emoji.name === "🔴"){
                 member.guild.channels.create(`🔴 ${member.user.username}`, {type: "text"}).then(chan => {
                     let category = member.guild.channels.cache.get("767744830893457408", c => c.type == "category")
                     chan.setParent(category)
  
                     let role1 = member.guild.roles.cache.get("767744806117441596")
                     let role2 = member.guild.roles.cache.get("767744806814220309")
                     let everyone = member.guild.roles.cache.get("756935913845555360")
  
                     chan.updateOverwrite(role1, {
                         SEND_MESSAGES: true,
                         VIEW_CHANNEL: true
                     })
                     chan.updateOverwrite(role2, {
                         SEND_MESSAGES: true,
                         VIEW_CHANNEL: true
                     })
                     chan.updateOverwrite(member, {
                         SEND_MESSAGES: true,
                         VIEW_CHANNEL: true
                     })
                     chan.updateOverwrite(everyone, {
                         SEND_MESSAGES: false,
                         VIEW_CHANNEL: false
                     })
                 }).catch(console.error)
             }
  
        }
    }
  })
  
  client.on("message", async message => {
    if(message.content === "close"){
        if(message.channel.parentID == "767747166864277544"){
            message.channel.send("le probléme a été résolue le salon seras fermé dans 30 secondes !! ")
            message.guild.channels.cache.get(message.channel.id).setName(`🟢 Probléme regler`)
            setTimeout(() => {
                message.channel.delete()
  
            }, 30*600)
  
        }
    }})
    client.on('message', async (message) => {

        if(message.channel.id ==="767744850879316020"){
          message.delete()
        
      
      
            const eeee = message.content.trim().split(/ +/g);
            let vvvv = eeee.join(" ");
            
            const AnnoceEmbed = new Discord.MessageEmbed()
            .setTitle(`Candidature de : ${message.member.user.username}`)
            .setDescription(vvvv)
            .setFooter('🎉| Hammer😈 | Candidature', 'https://cdn.discordapp.com/attachments/767748851737690194/767764824032673872/voice_1.png');
            client.channels.cache.get('767764334180433941').send(AnnoceEmbed);
    
    
            const detail = new Discord.MessageEmbed()
            .setTitle(`Information`)
            .setColor("PURPLE")
            .setDescription("Merci d'éxécuter si vous l'accepter : ^Accepter @user (avec une raison) et pour la refuser : ^Refuser @user (avec une raison)  ")
            .setFooter('🎉| Hammer😈 | Candidature', 'https://cdn.discordapp.com/attachments/767748851737690194/767764824032673872/voice_1.png');
            client.channels.cache.get('767764334180433941').send(detail);
    
    
    
    
          
      
    
                  
         
                  
     
             
                  
                
                  
            
                  
                
                  
                  
                   
         
                  
              
              
    
                const zzzzzz = new Discord.MessageEmbed()
                .setAuthor('🎉| Hammer😈 | Candidature', 'https://cdn.discordapp.com/attachments/767748851737690194/767764824032673872/voice_1.png')
                .setTitle("Candidature")
                .setDescription("Votre Candidature a bien été prise compte ");
      
            message.author.send(zzzzzz);
      
      
        
        }
        var old_msg = [] // stock les 3 derniers messages

client.on('message',(msg)=>{ // Evenement message 
        try{ // ESSAYER
            if (msg.author.id != client.user.id && old_msg[old_msg.length-1].author.id == msg.author.id && old_msg[old_msg.length-2].author.id == msg.author.id) { // SI LES TROIS DERNIERS MESSAGES SONT ENVOYÉS PAR LE MEME UTILISATEUR
                
                var time = msg.createdAt - old_msg[old_msg.length-1].createdAt // DURÉE ENTRE LES DEUX DERNIERS MESSAGES

                if (time < 5000) {//SPAM 5 sec
                    msg.member.roles.add('767744806117441596') //AJOUTE LE ROLE SPAM
                    
                    client.channels.cache.get('768786355693813760').send(`${msg.member} a été mute`) // MSG ADMINISTRATIOn
                    msg.channel.send(`Calme toi ${msg.member} !! `) // MSG DE PREVENTION
                    timer(msg,client)//DESACTIVÉ AU BOUT D'UN X LE SPAM
                    msg.delete() // SUPPRIME LE MESSAGE
                    
                }

            }else if(old_msg.length > 3){
                old_msg = []
            }

        }catch(e){ // SI UNE ERREUR SURVIENT
            console.error(e);
        }

        old_msg.push(msg)
    })

})

client.login(process.env.TOKEN);