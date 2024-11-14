import axios from 'axios/dist/node/axios.cjs';

module.exports = async (req, res) => {
    const url = "https://techcrunch-bot.onrender.com/bot";
    const toNumber = "593994029754"
    const data = {
        "to_number": toNumber
    };
    try {
        const response = await axios.post(url, data);
        console.log("Response data:", response.data);
        res.status(200).send("POST request successful");
    } catch (error) {
        console.error("Error making POST request:", error.message);
        res.status(500).send("Error making POST request");
    }
  };
