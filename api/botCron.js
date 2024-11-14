import { postRequest } from './requestUtil';

module.exports = async (req, res) => {
    const url = "https://techcrunch-bot.onrender.com/bot";
    const toNumber = "593994029754";
    const data = { "to_number": toNumber };

    const { status, message: responseMessage } = await postRequest(url, data);
    res.status(status).send(responseMessage);
};
