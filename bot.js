client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
});


client.on('guildMemberAdd', member => {
    const guild = member.guild;
    guild.channels.find(channel => channel.name === "welcome").send("اهلا بك في سيرفرنا "+member.user.username);
});



client.on("message", message => {
  if (message.content === ".help") {
message.author.send(`**
Test
Test





**`)
      message.channel.send("تفقد الخاص")
  }
});



client.login(process.env.BOT_TOKEN);
