import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {

    const auth = request.cookies.get("tokenAccess")

    if (auth === undefined){
        return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    try {
        const { payload } = await jwtVerify(auth, new TextEncoder.encode(process.env.TOKKEN_ACCESS))
        console.log(payload);

    } catch (error) {
        console.log(error);
    }

    return NextResponse.next()

}

