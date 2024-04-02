// Carpeta api agregada el 21/10/2023
import { NextResponse } from "next/server";

export async function GET(){
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respuesta.json();
    return NextResponse.json(data);
}