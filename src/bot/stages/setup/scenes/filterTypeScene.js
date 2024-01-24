const { Scenes, Markup } = require('telegraf');

const filterTypeScene = new Scenes.BaseScene("filterType");

filterTypeScene.enter((ctx) => {
    ctx.session.newFilters = ctx.session.newFilters ?? {};

    ctx.reply(
        "Доступные фильтры",
        Markup.inlineKeyboard([
            [
                Markup.button.callback("Ключевое слово", "keyword"),
                Markup.button.callback("Код региона поиска", "regionCode"),
            ],
            [
                Markup.button.callback("Готово", "done"),
            ]
        ])
    );
});

filterTypeScene.action("keyword", async (ctx) => {
    await ctx.deleteMessage();

    ctx.scene.enter("keyword");
});

filterTypeScene.action("regionCode", async (ctx) => {
    await ctx.deleteMessage();

    ctx.scene.enter("regionCode");
});

filterTypeScene.action("done", async (ctx) => {
    if (Object.keys(ctx.session.newFilters).length) {
        ctx.session.filters = {
            ...ctx.session.filters,
            ...ctx.session.newFilters,
        }

        ctx.session.newFilters = {};

        await ctx.deleteMessage();
        ctx.reply("Фильтры успешно обновлены!");
    } else {
        ctx.deleteMessage();
    }
});

exports.filterTypeScene = filterTypeScene;