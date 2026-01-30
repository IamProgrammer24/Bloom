import { Zap, ChevronRight, Sun } from "lucide-react";
import cardBg from "../assets/sunrise.PNG";

const MemberRates = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* LEFT CONTENT */}
                <div className="max-w-xl">
                    <h2 className="text-[44px] leading-tight font-semibold text-[#FDC500] mb-6">
                        The more you stay,<br />
                        the less you pay.
                    </h2>

                    <p className="flex items-center text-green-600 font-semibold mb-4">
                        <Zap className="mr-2 fill-green-600 stroke-0" size={18} />
                        Get up to 15% off extra on your stays!
                    </p>

                    <p className="text-gray-500 text-lg leading-relaxed">
                        Finally a Loyalty Program that just works. Join the
                        Bloom Community & save every time you stay.
                    </p>
                </div>

                {/* RIGHT CARD */}
                <div className="relative w-[360px] rounded-xl border-2 border-[#FDC500] overflow-hidden bg-white">

                    {/* Card Header with background image */}
                    <div
                        className="h-32 p-4 flex items-start"
                        style={{
                            backgroundImage: `url(${cardBg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <span className="text-[#FDC500] font-bold text-2xl">
                            bloom
                        </span>
                    </div>
                    {/* CTA Section */}
                    <div className="bg-[#FDC500] px-6 py-5">
                        <button className="flex items-center w-full text-white font-bold text-xl">
                            Unlock Member Rates
                            <ChevronRight size={20} />
                        </button>

                        <div className="h-1 bg-white rounded-full mt-3 w-48" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MemberRates;
