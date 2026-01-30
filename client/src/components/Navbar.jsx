// import { ChevronDown, Menu } from "lucide-react"

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 mb-6">
//       <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        
//         {/* Logo */}
//         <h1 className="text-white text-3xl font-bold tracking-wide">
//           bloom
//         </h1>

//         {/* Right Section */}
//         <div className="flex items-center gap-12 text-white">
          
//           {/* Hotels Dropdown Trigger */}
//           <button className="flex items-center font-bold gap-1 hover:text-gray-300 transition">
//             <span>Hotels</span>
//             <ChevronDown size={16} />
//           </button>

//           <span className="cursor-pointer font-bold hover:text-gray-300 transition">
//             Why Bloom?
//           </span>

//           <span className="cursor-pointer font-bold hover:text-gray-300 transition">
//             Developers & Owners
//           </span>

//           {/* Login / Join Button */}
//           <button className="border-2 border-white px-4 py-2 rounded-lg font-bold hover:bg-white hover:text-black transition">
//   Login / Join
// </button>

//           {/* Menu Icon */}
//           <button className="hover:text-gray-300 font-bold transition">
//             <Menu size={24} />
//           </button>
//         </div>

//       </div>
//     </nav>
//   )
// }

// export default Navbar


import { ChevronDown, Menu } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      setIsScrolled(currentScroll > 20)

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      setLastScrollY(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-yellow-400 text-white shadow-md" : "bg-transparent text-white"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          bloom
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-12 font-bold">
          
          <button className="flex items-center gap-1 hover:text-black/80 transition">
            <span>Hotels</span>
            <ChevronDown size={16} />
          </button>

          <span className="cursor-pointer hover:text-black/80 transition">
            Why Bloom?
          </span>

          <span className="cursor-pointer hover:text-black/80 transition">
            Developers & Owners
          </span>

          <button className="border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Login / Join
          </button>

          <button className="hover:text-black/80 transition">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
