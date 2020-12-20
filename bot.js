const Discord = require("discord.js");
const client = new Discord.Client();

const PREFIX = ">";

require("dotenv").config();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("ready", () => {
  console.log(`${client.user.username} : Has Logged In ` /* client.user.tag */);
});

client.on("message", (meassage) => {
  if (meassage.author.bot) return;

  // console.log( `${meassage.content} : meassage was sent by: ${meassage.author.tag}`);
  if (meassage.content.startsWith(PREFIX)) {
    const [cmd_name , ...args] = meassage.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

      // console.log(cmd_name)

      console.log(args);


    //! Kicking Members


    let user = meassage.guild.members.cache.get(args)

    if (cmd_name === "kick") {
      if (args.length == 0) meassage.reply("Please provide an ID");

      if (meassage.member.hasPermission("KICK_MEMBERS")) {

        console.log(client.user);

        if (user == undefined) {

          console.log(user);
          
          client.user.kick();

          meassage.channel.send("Kicked " + member.username);
        } else {
          meassage.channel.send("Member Undefined")
        } 
      }
       else {
        meassage.channel.send("You dont have Permissions");
      }
    }
    
    //! Banning Members
    
    
    else if ( cmd_name === "ban") {

      const bMember = meassage.mentions.users.first();

      let bUser = meassage.guild.members.cache.get(bMember.id)

      if (meassage.member.hasPermission("BAN_MEMBERS")) {

        if (bMember.length == 0) meassage.channel.send('Provide a valid Id');
        bUser.ban();
        meassage.channel.send("Kicked " + bMember.mentions.username);

      } else {
        meassage.channel.send("You dont have permissions to ban a member");
      }
    }
  }
});
