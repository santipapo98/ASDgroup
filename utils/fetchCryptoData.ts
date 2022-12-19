

// import { Experience } from "../typings";
export const fetchCryptoData = async () => {
    try {
        const res = await fetch(`https://api.wazirx.com/sapi/v1/tickers/24hr`)
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }

}