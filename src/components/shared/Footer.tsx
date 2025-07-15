import { ArrowUpRight } from "lucide-react"

function Footer() {
  return (
    <footer className="w-full p-6 bg-zinc-700 rounded-t-4xl ">
      <div className="flex items-center justify-around gap-4 text-white">
        <div  className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">TransfiNITTe'25</h1>
          <p className="text-sm">Hack the Hackathon</p>
        </div>
        <p className="">Made with ❤️ by the Technical Council of NITT</p>
        <div className="flex gap-6">
          <button className="border p-2 rounded-full flex gap-2 group hover:bg-zinc-900 transition-all">Contact Us<ArrowUpRight className="group-hover:rotate-45 transition-all text-cyan-300 "/></button>
          <button className="border p-2 rounded-full flex gap-2 group hover:bg-zinc-900 transition-all">Instagram<ArrowUpRight className="group-hover:rotate-45 transition-all text-cyan-300 "/></button>
          <button className="border p-2 rounded-full flex gap-2 group hover:bg-zinc-900 transition-all">Archive<ArrowUpRight className="group-hover:rotate-45 transition-all text-cyan-300 "/></button>
        </div>
      </div>
    </footer>
  )
}

export default Footer