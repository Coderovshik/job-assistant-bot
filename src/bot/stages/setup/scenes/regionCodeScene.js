const { Scenes } = require("telegraf");

const regionCodeScene = new Scenes.BaseScene("regionCode");

regionCodeScene.enter((ctx) => {
    ctx.reply("Введите код региона для поиска вакансий (например: 77)");
});

regionCodeScene.on("message", async (ctx) => {
    const msg = ctx.message.text;
    ctx.session.newFilters.regionCode = msg;

    await ctx.reply(`Поиск по региону: ${msg}`);
    ctx.scene.enter("filterType");
});

exports.regionCodeScene = regionCodeScene;