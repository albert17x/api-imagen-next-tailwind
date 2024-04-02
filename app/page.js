//? En esta version de Next no necesitamos usar useState ni useEffect.
// Aqui ya tenemos los React Server Components
// 1. Crear una funcion fetch
// 2. Guardar la respuesta en una variable, ejm "vmres"
// 3. Convertir los datos a formato Json
import Users from "@/components/Users"

async function fetchUsuarios() {
  const vmres = await fetch("https://reqres.in/api/users")
  const vmdata = await vmres.json()
  // console.log(vmdata)
  return vmdata.data
}

async function HomePage() {
  // await fetchUsers();
  const vmusers = await fetchUsuarios()
  //? Interface de usuario

  return (
    <Users vmpijas={vmusers} />
  )
}
export default HomePage