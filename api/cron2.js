import axios from 'axios/dist/node/axios.cjs';

require('dotenv').config();

module.exports = async (req, res) => {
    const url =  process.env.WHATSAPP_AUTOMATION_RENDER_URL;
    const number = process.env.TWILIO_PHONE_NUMBER;
    const message = "join prize-fierce";
    const data = { number, message };

    try {
        const response = await axios.post(url, data);
        console.log("Response data:", response.data);
        res.status(200).send("POST request successful");
    } catch (error) {
        console.error("Error making POST request:", error.message);
        res.status(500).send("Error making POST request");
    }
};
