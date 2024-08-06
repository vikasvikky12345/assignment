import { useState } from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaLessThan, FaRegHeart, FaShareAlt, FaArrowRight } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative w-full h-screen flex">
      <div className={`absolute top-16 z-10 transition-all duration-300 ${toggle ? 'left-80' : 'left-4'}`}>
        {!toggle ? (
          <FaAngleDoubleRight
            className="text-white cursor-pointer"
            onClick={() => setToggle(true)}
          />
        ) : (
          <FaAngleDoubleLeft
            className="text-white cursor-pointer"
            onClick={() => setToggle(false)}
          />
        )}
      </div>

      {/* Sidebar */}
      <div className={`transition-all duration-300 ${toggle ? 'w-1/4' : 'w-0'} bg-gray-300 overflow-hidden`}>
        {toggle && (
          <div className="p-4 relative">
            <div className="arrow">
              <FaLessThan className="absolute top-6 left-6 text-[#664c28] bg-gray-400 rounded-2xl border p-2 text-3xl" />
            </div>
            <div className="mt-12">
              <p className="text-2xl">
                MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
              </p>
            </div>
            <div className="flex space-x-10 mt-4">
              <div className="flex flex-col space-y-1 items-center">
                <FaRegHeart className="bg-gray-400 rounded-2xl border p-2 text-3xl text-[#664c28]" />
                <span className="text-sm">0</span>
              </div>
              <div className="flex flex-col space-y-1 items-center">
                <FaShareAlt className="bg-gray-400 rounded-2xl border p-2 text-3xl text-[#664c28]" />
                <span className="text-sm">120</span>
              </div>
              <div className="flex flex-col space-y-1 items-center">
                <MdOutlineRemoveRedEye className="bg-gray-400 rounded-2xl border p-2 text-3xl text-[#664c28]" />
                <span className="text-sm">27</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">Dynasty: Achichatra</p>
              <p className="text-sm">Period: 200CE</p>
              <p className="text-sm">Material: Sandstone</p>
              <p className="text-sm">Location: National Museum</p>
            </div>
            <div className="mt-4 text-sm">
              <p>Description:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, molestiae vel, facere officiis asperiores exercitationem.</p>
            </div>
            <div className="flex space-x-4 items-center mt-2">
              <FaArrowRight className="text-[#cd853f]" />
              <p className="text-[#cd853f]">Read More</p>
            </div>
            <div className="space-x-3 mt-2">
              <button className="bg-[#cd853f] px-1 py-1 text-white hover:bg-[#8b4513] rounded-md border border-[#cd853f] duration-100">ADD TO COLLECTION</button>
              <button className="p-1 text-[#cd853f] bg-white border border-[#cd853f] rounded-md">SOUVENIR</button>
            </div>
          </div>
        )}
      </div>
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${toggle ? 'w-3/4' : 'w-full'} relative h-full bg-cover bg-center`} style={{ backgroundImage: 'url(/Picture2.jpg)' }}>
        <img src="/Picture1.png" alt="Top" className="absolute inset-0 m-auto max-w-full max-h-full" />
      </div>
    </div>
  );
};
export default Home;
