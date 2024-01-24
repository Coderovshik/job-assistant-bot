const config = require('../config/config.js');
const { Telegraf, session } = require('telegraf');
const { start, help, setup, search } = require('./commands');
const { setupStage } = require('./stages/setup/index.js');

exports.Bot = class Bot {
    constructor() {
        this.config = config.load();
        this.telegraf = new Telegraf(this.config.bot_token);

        this.telegraf.use(session());
        this.telegraf.use(setupStage.middleware());

        this.telegraf.catch((err, ctx) => {
            console.log(`error: ${ctx.updateType}`, err);
        });
    }

    init() {
        this.telegraf.command("start", start);
        this.telegraf.command("help", help);
        this.telegraf.command("setup", setup);
        this.telegraf.command("search", search);

        console.log('Bot has been started');
        this.telegraf.launch();
    }
}