import heroVideo from "../assets/hero-tablet.webm"
import { Search, Zap } from "lucide-react"


const HeroSection = () => {
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

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center pt-4">
        {/* Use same container as navbar for perfect alignment */}
        <div className="max-w-6xl mx-auto w-full px-6 lg:px-8">
          <div className="max-w-2xl">
            
            {/* Heading */}
            <h1 className="text-white text-5xl font-semibold leading-tight mb-2">
              Fresh Travel,<br></br>
Hello Bloom.
            </h1>

            {/* Description */}
            <p className="text-white text-2xl leading-light mb-6">
             A platform for a new generation<br></br>
of hotels for intelligent travellers,<br></br>
at the best locations & rates.
            </p>

            {/* Input Box */}
           <div className="mb-4 relative w-[30rem]">
  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
  <input
    type="text"
    placeholder="Book a Bloom in"
    className="w-full pl-10 pr-4 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xl"
  />
</div>


            {/* Extra Line */}
           <p className="flex items-center text-white text-base mt-2">
  <Zap className="mr-2"
    size={20}
    fill="white"   // fill with white
    stroke="none"  // remove outline
     />
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
