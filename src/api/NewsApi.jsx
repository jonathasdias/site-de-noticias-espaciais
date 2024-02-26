import axios from "axios";

export default async function NewsApi(url) {
    try {
        const res = await axios.get(url);
        return res;
    } catch (error) {
        console.error(error);   
    }
}