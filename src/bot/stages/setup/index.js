const { Scenes } = require("telegraf");
const { filterTypeScene, keywordScene, regionCodeScene } = require("./scenes");

const setupStage = new Scenes.Stage([
    filterTypeScene,
    keywordScene,
    regionCodeScene,
]);

exports.setupStage = setupStage;