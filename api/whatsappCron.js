import { postRequest } from './requestUtil';

module.exports = async (req, res) => {
    const url = "https://whatsapp-automation-6lyn.onrender.com/send-message";
    const number = "14155238886";
    const message = "join prize-fierce";
    const data = { number, message };

    const { status, message: responseMessage } = await postRequest(url, data);
    res.status(status).send(responseMessage);
};
