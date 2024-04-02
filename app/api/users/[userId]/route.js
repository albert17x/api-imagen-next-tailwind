import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await respuesta.json();
    return NextResponse.json(data);
}