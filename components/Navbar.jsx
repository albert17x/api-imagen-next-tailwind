import Link from "next/link"
const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-b from-slate-600 to-slate-900  flex justify-between items-center px-20 py-4 sticky top-0 ">
      <Link href="/">🏠 Home</Link>
      <ul>
        <li>
          <Link className=" mr-3" href="/dbgrid">DbGrid</Link>
          <Link href="/about">About 🏛️</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar