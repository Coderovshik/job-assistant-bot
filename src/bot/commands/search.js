const { getVacancies } = require("../../api/vacancies");
const param = require("../../api/param.js");

exports.search = async (ctx) => {
    try {
        const filters = ctx.session.filters ?? {};
        const { vacancies } = await getVacancies(
            param.region(filters.regionCode),
            {
                limit: 10,
                ...(filters.keyword && { text: filters.keyword }),
            },
        );

        if (!vacancies.length) {
            return ctx.reply("Ничего не найдено");
        }

        for (const { vacancy } of vacancies) {
            ctx.replyWithMarkdown(vacancyString(vacancy));
        }
    } catch (error) {
        console.log(error);
        ctx.reply("Произошла ошибка");
    }
}

const vacancyString = (vacancy) => (
    `Название: ${vacancy["job-name"]}\n` +
    `Зарплата: ${vacancy.salary || "Не указано"}\n` +
    `Работодатель: ${vacancy.company.name}\n\n` +
    `Подробнее -> ${vacancy.vac_url}`
);