import heroVideo from "../assets/hero-tablet.webm"
import { Search, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const cities = ["Kakinda", "Katra", "Kochi", "Lonavala"]

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("")
  const [cityIndex, setCityIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentCity = cities[cityIndex]
  const animatedCity = currentCity.slice(0, charIndex)

  useEffect(() => {
    let timeout

    if (!isDeleting && charIndex <= currentCity.length) {
      timeout = setTimeout(() => {
        setCharIndex(charIndex + 1)
      }, 120)
    } 
    else if (!isDeleting && charIndex > currentCity.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex(charIndex - 1)
      }, 80)
    } 
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCityIndex((cityIndex + 1) % cities.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, cityIndex, currentCity.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 lg:px-8">
          <div className="max-w-2xl">

            <h1 className="text-white text-5xl font-semibold leading-tight mb-2">
              Fresh Travel,<br />
              Hello Bloom.
            </h1>

            <p className="text-white text-2xl mb-6">
              A platform for a new generation<br />
              of hotels for intelligent travellers,<br />
              at the best locations & rates.
            </p>

            {/* Input with Fake Placeholder */}
            <div className="mb-4 relative w-[30rem]">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                size={18}
              />

              {/* Fake Placeholder */}
              {inputValue === "" && (
                <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none text-xl">
                  <span className="text-gray-400">
                    Book a Bloom in{" "}
                  </span>
                  <span className="text-yellow-400 font-semibold">
                    {animatedCity}
                  </span>
                </div>
              )}

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full pl-10 pr-4 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <p className="flex items-center text-white text-base mt-2">
              <Zap className="mr-2" size={20} fill="white" stroke="none" />
              <span className="font-bold">
                Book Direct for Lowest Prices!
              </span>
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
