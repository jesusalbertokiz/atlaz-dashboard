import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {

    const auth = request.cookies.get("tokenAccess")

    if (!auth) return NextResponse.redirect(new URL("/auth/login", request.url))


    try {
        //Convertimos el auth.value en Uint8Array
        const authBuffer = new TextEncoder().encode(auth.value).buffer;
        const authUint8Array = new Uint8Array(authBuffer);

        //Convertimos el key en Uint8Array
        const keyBuffer = new TextEncoder().encode(process.env.TOKEN_SECRET).buffer;
        const keyUint8Array = new Uint8Array(keyBuffer);

        const { payload } = await jwtVerify(authUint8Array, keyUint8Array, {
            algorithms: ["HS256"]
        })
        
        return NextResponse.next()
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

}

export const config = {
    matcher: ["/", "/estado/:path*"],
  };