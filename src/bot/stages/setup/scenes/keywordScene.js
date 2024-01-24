const { Scenes } = require("telegraf");

const keywordScene = new Scenes.BaseScene("keyword");

keywordScene.enter((ctx) => {
    ctx.reply("Введите ключевое слово для поиска вакансий (пример: инженер)");
});

keywordScene.on('message', async (ctx) => {
    const msg = ctx.message.text;
    ctx.session.newFilters.keyword = msg;

    await ctx.reply(`Поиск по ключевому слову: ${msg}`);
    ctx.scene.enter("filterType");
});

exports.keywordScene = keywordScene;