import { ArrowUpRight } from "lucide-react"

function Navbar() {
  return (
    <nav className="flex items-center justify-between backdrop-blur-sm p-2 rounded-b-2xl">
      <h3 className="capitalize text-2xl font-bold ">hackathon</h3>
      <h1 className="uppercase font-bold text-3xl ">transfinite '25</h1>
      <button className="border-b-2 hover:bg-zinc-800 transition-all p-2 rounded-full flex gap-2 group">Register Now<ArrowUpRight className="group-hover:rotate-45 transition-all text-cyan-300 "/></button>
    </nav>
  )
}

export default Navbar