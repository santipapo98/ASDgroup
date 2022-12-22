export interface cryptoObject {
    symbol: string;
    quoteAsset: string;
    openPrice: number;
    lowPrice: number;
    highPrice: number;
    lastPrice: number;
    at: number;
}

export interface loginForm {
    user: string;
    password: string;
}