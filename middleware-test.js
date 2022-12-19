import { NextResponse } from "next/server";

export default function middleware(req) {
    let verify = req.cookies.get('loggedIn')
    let url = req.url

    if (verify !== 'true' && url.includes('/home')) {
        return NextResponse.redirect('http://localhost:3000/')
    }

    if (verify === 'true' && url.includes('http://localhost:3000/')) {
        return NextResponse.redirect('http://localhost:3000/home')
    }
}