exports.start = async (ctx) => {
    await ctx.setMyCommands([
        {
            command: '/start',
            description: 'Запуск бота',
        },
        {
            command: '/help',
            description: 'Информация',
        },
        {
            command: '/setup',
            description: 'Указать фильтры',
        },
        {
            command: '/search',
            description: 'Искать вакансии',
        },
    ]);

    return ctx.reply(messageStart(ctx.from));
}

const messageStart = (from) => (
    "Привет, " +
    (from?.first_name || from?.username || "пользователь") + 
    "\n\n" +
    "Я могу помочь найти тебе новую работу\n" +
    "Посмотреть доступные команды можно в меню"
);