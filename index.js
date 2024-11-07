import axios from "axios";

const sendRequest = async () => {
    const url = "https://techcrunch-bot.onrender.com/bot";
    const toNumber = "593994029754"
    const data = {
        "to_number": toNumber
    };

    try {
        const response = await axios.post(url, data);
        console.log("Response data:", response.data);
    } catch (error) {
        console.error("Error making POST request:", error.message);
    }
}
sendRequest()
