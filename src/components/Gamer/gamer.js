import React from "react";
import PES from "../../../src/images/PES.jpg";
import Assassin from "../../../src/images/Assassin.jpg";
import mm3 from "../../../src/images/mm3.jpg";
import Footer from "../footer.js";
const Gamer = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <img
                alt="Gamepad"
                src="https://img.icons8.com/plasticine/200/000000/controller.png"
              />
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Gamer
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                FIFA fan boy turned PES entusiasst turned FIFA again. I try to
                make time to play video games because they help me clear my head
                after a hectic day. When I finish up my blog I will post reviews
                of the games I play.
              </p>
              <p className="text-base text-gray-700 md:text-lg">
                Recently I decided to replay all the editions of the Assassin's
                Creed franchise (pre-2015), so no Origins or Oddessy. I also
                added Mafia 2 (definitive edition) and Sekiro Shadows.
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-64 w-28 sm:w-48 xl:w-56"
                src={Assassin}
                alt="Assassin Creed"
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:hidden md:flex xl:h-40 sm:w-32 xl:w-40"
                src={mm3}
                alt="Call of Duty MM3"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-72 rounded shadow-lg sm:w-64 xl:w-80"
                src={PES}
                alt="PES"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h2>Some of my favourite gaming titles</h2>
      </div> */}
      <Footer />
    </div>
  );
};

export default Gamer;
