

// import { Experience } from "../typings";

export const fetchCryptoData = async () => {
    const res = await fetch(`https://api.wazirx.com/sapi/v1/tickers/24hr`)
    const data = await res.json();

    return data;
}