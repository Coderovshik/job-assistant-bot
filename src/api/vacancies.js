const config = require("../config/config.js");
const querystring = require("node:querystring");
const { request } = require("undici");

const api_url = config.load().api_url;

async function getVacancies(routeParam, queryParams) {
    const q = queryParams ? querystring.stringify(queryParams) : "";
    const url = api_url +
        "/vacancies" +
        (routeParam ?? "") +
        "?" + q;
    console.log(url);

    const { statusCode, headers, body } = await request(url);

    if (statusCode >= 400) {
        console.log("request failed", statusCode, headers);
        return null;
    }

    const { results } = await body.json();
    return results;
}

exports.getVacancies = getVacancies;