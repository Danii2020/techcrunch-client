import axios from 'axios/dist/node/axios.cjs';
module.exports = async (req, res) => {
    const url = "https://whatsapp-automation-6lyn.onrender.com/api/send-message";
    const number = "14155238886";
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
