"use client";
import Link from "next/link";

const Bermusers = ({ vmpijas }) => {
  return (
    <ul className=" grid gap-4 grid-cols-1 ">
      {vmpijas.map((usuario) => (
        <Link href={`/vmpijas/${usuario.id}`} key={usuario.id} >
          <li className=" bg-slate-400 mt-8 mb-2 p-2 rounded-md text-black flex justify-between ">
            <div>
              <h5 className=" font-bold"> Id. {usuario.id} {usuario.first_name} {usuario.last_name}</h5>
              <p className=" text-slate-100">email: {usuario.email}</p>
            </div>
            <img src={usuario.avatar} alt="Imagen" className=" rounded-full w-20" />
          </li>
        </Link>

      )
      )}
    </ul>
  )
}
export default Bermusers