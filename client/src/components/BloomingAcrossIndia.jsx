import { ChevronLeft, ChevronRight } from "lucide-react";

const locations = [
  {
    title: "Bloom Hotel - Calangute",
    city: "Goa",
    price: "₹3,308",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    title: "Bloom Hotel - Sector 62",
    city: "Noida",
    price: "₹5,009",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    title: "Bloom Hotel - Bengaluru Airport",
    city: "Bengaluru",
    price: "₹4,112",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    title: "Bloom Boutique | Connaught Place",
    city: "Delhi",
    price: "₹9,558",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    title: "Bloom Boutique | Connaught Place",
    city: "Delhi",
    price: "₹9,558",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    title: "Bloom Boutique | Connaught Place",
    city: "Delhi",
    price: "₹9,558",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    title: "Bloom Hotel - Bengaluru Airport",
    city: "Bengaluru",
    price: "₹4,112",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    title: "Bloom Hotel - Bengaluru Airport",
    city: "Bengaluru",
    price: "₹4,112",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
];

const BloomingAcrossIndia = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#FDC500]">
        Blooming across India
      </h2>
      <p className="mt-3 text-gray-400 max-w-3xl text-3xl">
        In top locations including – Mumbai, Bengaluru, Delhi, Gurugram, Pune,
        Goa, Udaipur, Srinagar & Rishikesh!
      </p>

      {/* Slider */}
      <div className="relative mt-10">
        {/* Left Arrow */}
        <button className="absolute -left-4 top-[50%] -translate-y-1/2 z-10 bg-[#FDC500] text-white p-2 rounded-full shadow">
          <ChevronLeft size={24} />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {locations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200 my-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-500 text-sm line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm text-gray-400">{item.city}</p>

                  <p className="text-sm font-semibold text-emerald-600">
                    From {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-[#FDC500] text-white p-2 rounded-full shadow">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default BloomingAcrossIndia;
