async function getUser(id) {
  const vmrespuesta = await fetch(`http://reqres.in/api/users/${id}`);
  const vmdatin = await vmrespuesta.json();
  return vmdatin.data;
}

const UserxPage = async ({ params }) => {
  const vmuser = await getUser(params.id);
  return (
    <div className="  bg-gray-900 p-20 rounded-md">
      <img src={vmuser.avatar} alt="imagen" className=" m-auto my-4 " />
      <h3 className=" text-3xl font-bold ">{vmuser.id} {vmuser.first_name} {vmuser.last_name}</h3>
      <p>email Che: {vmuser.email}</p>
    </div>
  )
}
export default UserxPage