const Discord = require('discord.js');
const roleMgmnt = require('./addRole.js');
const client = new Discord.Client();

// L'evenement 'ready' va être éxécuté quand le bot va être lancé
client.on('ready', () => {

    console.log('Poudlard est pret!');

});

// L'evenement 'message' va être éxécuté quand un message sera envoyer
// dans un channel ou en DM au bot
client.on('message', message => {

    if (message.channel.type === 'dm'){
        var member = message.author
        var str = message.content
        message.member.send('le message à bien été transmit!')
    }

    if (message.channel.type === 'dm'){
        var member = message.author
        var str = message.content
         var channel = message.guild.channels.resolve("596051131134771221").send(str); // id du channel
         message.member.send('le message à bien été transmit!')
                   }

    // Si le message est envoyer en DM au bot
    // Donc on test si le message renvoie une guild
    // Si c'est "false" on retourne
    if (!message.guild) return;

    // Si c'est un bot qui écrit le message
    if (message.author.bot) return;

    let command = message.content.toLowerCase();

    if (message.content == 'ping') {
        message.channel.send('pong');
    }
    else if (command === 'uwu') {
        message.channel.send('OwO');
    }
    else if (command === 'OwO') {
        message.channel.send('What?');
    }
    else if (command === 'What?') {
        message.channel.send('uwu');
    }

    else if (command === 'Yuki est le meilleur?') {
        message.channel.send('Oui bien sur!!');
    }

    else if (command == '/help') {
        message.channel.send('Tu te debrouille serieux !!')
    }
    else if (command === '/petrificus ' + message.mentions.members.first()) {
        message.channel.send(message.member.displayName + ' à petrifié ' + message.mentions.members.first() + ' ' + image);
        // Ton code au dessus va juste renvoyer " $username à petrifié(e) ... " par contre. 
        // Si tu veut envoyer le pseudo de l'author avec un message tu peut faire :
        // message.channel.send(message.member.displayName + 'à petrifié(e) ...');
    }

    else if (command.startsWith('/lumos ' + message.mentions.members.first())) {
        message.channel.send(message.mentions.members.first() + ' à été illuminer par ' + message.member.displayName + ' ' + image2);
    }

    else if (command === '/leviosa ' + message.mentions.members.first()) {
        message.channel.send(message.mentions.members.first() + ' vole grâce à ' + message.member.displayName + ' ' + image3);
    }

    else if (command === '/doloris ' + message.mentions.members.first()) {
        message.channel.send(message.member.displayName + ' inflige une douleur aiguë à ' + message.mentions.members.first() + ' ' + image4);
    }

    else if (command == '/live off') {
        message.channel.send('Tu te debrouille serieux !!');
    }

    else if (command.startsWith('/addrole')) {

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send('T\'as pas le droit :)');
            return;
        }

        let commandParts = command.split(" ");
        if (commandParts.length < 3) {
            message.channel.send('Bad command');
            return;
        }

        let userCommand = commandParts[1];
        let roleCommand = commandParts[2].substr(3, commandParts[2].length-4);

        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(userCommand);
        if (!member) {
            message.channel.send('Bad member name');
            return;
        }

        let role = message.guild.roles.find(`id`, roleCommand);
        if (!role) {
            message.channel.send('Bad role name');
            return;
        }

        if (member.roles.has(role.id)) {
            message.channel.send('Rôle déjà attribué');
            return;
        }

        member.addRole(role.id);

        try {
            rMember.send(`Congrats, you have been given the role ${role.name}`);
        } catch (e) {
            console.log(e.stack);
            message.channel.send(`Congrats to <@${member.id}>, they have been given the role ${role.name}. We tried to DM them, but their DMs are locked.`)
        }
    }

    else if (command.startsWith('/removerole')) {

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send('T\'as pas le droit :)');
            return;
        }

        let commandParts = command.split(" ");
        if (commandParts.length < 3) {
            message.channel.send('Bad command');
            return;
        }

        let userCommand = commandParts[1].substr(3, commandParts[2].length-4);
        let roleCommand = commandParts[2].substr(3, commandParts[2].length-4);

        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(userCommand);
        if (!member) {
            message.channel.send('Bad member name');
            return;
        }

        let role = message.guild.roles.find(`id`, roleCommand);
        if (!role) {
            message.channel.send('Bad role name');
            return;
        }

        if(!member.roles.has(role.id)) return message.reply("They don't have that role.");
        (member.removeRole(role.id));

        try{
             message.channel.send(`RIP <@${member.id}>,tu a perdue le role ${role.name}.`)
          }catch(e){
            message.channel.send(`RIP <@${member.id}>,tu a perdue le role ${role.name}.`)
          }
        }
        

})

client.login('NjY3Nzg2OTk5OTA5OTc0MDQ2.Xkfm0A.6UX6zGSCMK-OSP8T66GFkvIA7G4');

var image2 = 'https://media1.tenor.com/images/bad50b998c65a46d589dc3878731771c/tenor.gif';

var image = 'https://www.serieously.com/wp-content/uploads/2018/12/source6.gif';

var image3 = 'https://media.giphy.com/media/RyLtUMBdogHvO/giphy.gif';

var image4 = 'https://vignette.wikia.nocookie.net/harrypotter/images/9/9c/Voldemort_crucio_harry.gif/revision/latest?cb=20170730184619';
