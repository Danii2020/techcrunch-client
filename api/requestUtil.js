import axios from 'axios/dist/node/axios.cjs';

export const postRequest = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        console.log("Response data:", response.data);
        return { status: 200, message: "POST request successful" };
    } catch (error) {
        console.error("Error making POST request:", error.message);
        return { status: 500, message: "Error making POST request" };
    }
};
