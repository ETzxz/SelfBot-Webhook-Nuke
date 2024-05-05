const { Client , WebhookClient } = require("discord.js-selfbot-v13");
const client = new Client({ checkUpdate: false });
const TOkEN = ""
const PREFIX = "t"

const ownerId = "996729793158578196" 


client.on("ready", async () => {
  console.log(`${client.user.username} đã hoạt động`);
})


client.on('messageCreate', async (message) => {
  if (message.content === '!w' && ownerId.includes(message.author.id)) {
    message.guild.channels.cache.forEach(channel => {
     if (channel.type === 'GUILD_TEXT' || channel.type === 'GUILD_VOICE') {
        channel.createWebhook('ET#3581', {
          avatar: 'https://images-ext-1.discordapp.net/external/SgpixXgOlAdfEh0UAJ9Q1UFdtTPVayEPgh1Mx_g56EE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/931571593765851136/b5f8b1058b5221c5dc716d8d83cd3da7.png?format=webp&quality=lossless'
        })
          .then(webhook => {
            setInterval(() => {
              webhook.send('# @everyone https://discord.gg/tzvctvMyP3  https://youtu.be/tk7G3yyc61U?si=JL6Lp8fq2Y4O34IY');
            }, 1000);
            console.log('Sent webhook successfully');
          })
          .catch(err => console.log(err.message);    
     }
   });
  }
});

process.on("unhandledRejection",(err) => {
    console.error(err)
    });
process.on("uncaughtException",(er) => {
    console.error(er) 
    })


client.login(TOkEN)
