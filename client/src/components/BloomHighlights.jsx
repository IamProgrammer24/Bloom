import Tech from "../assets/Techwithheart.jpg";
import Automated from "../assets/AutomateCleanliness.jpg";
import Sleep from "../assets/sleepTech.jpg";

const BloomHighlights = () => {
  const features = [
    {
      title: "Tech with heart",
      desc: "Like a best friend you can always trust & rely on, we're there for you every step of your stay helping you bloom to your best.",
      img: Tech,
    },
    {
      title: "Automated Cleanliness",
      desc: "We actually We actually design our hotels to be easier to clean which is probably why people keep saying we’re the cleanest hotel chain in India. our hotels to be spotless",
      img: Automated,
    },
    {
      title: "Sleep Tech",
      desc: "Our Our custom built CloudBeds™ are so comfortable you may just find yourself hitting the alarm snooze a few too many times.-built CloudBeds™ ensure deep rest",
      img: Sleep,
    },
  ]

  return (
    <section className="bg-[#FDC500] py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          What makes us Bloom?
        </h2>

        <p className="text-black/40 text-2xl max-w-3xl mb-14">
          With so much to tell & so little time, here are a few key highlights.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index}>
              
              {/* Image Card */}
              <div className="rounded-2xl overflow-hidden bg-white">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[420px] object-cover transform transition-transform duration-500 hover:scale-115"
                />
              </div>

              {/* Text */}
              <h3 className="text-white text-3xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-lg text-black/50  mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
          <h3 className="text-xl text-black/50 mt-8 hover:text-white underline transition-colors duration-300">
  See what makes us special
</h3>
 

      </div>
    </section>
  )
}

export default BloomHighlights
