var slackbot = require('./lib/bot');
require('events').EventEmitter.prototype._maxListeners = 100;


var config = {
    server: 'irc.freenode.net',
    nick: 'HSBNEslack',
    username: 'HSBNEirc',
    token: process.env.SLACKTOKEN,
    channels: {
        '#hsbne':'#general'
    },
    users: {
        'nog3': 'nogthree'
    }
    // optionals
    // silent: false // keep the bot quiet
};

var slackbot = new slackbot.Bot(config);
slackbot.listen();
