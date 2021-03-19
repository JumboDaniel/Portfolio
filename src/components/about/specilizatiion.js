import React from 'react';

const Specilizatiion = (props) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              My strongest
              <br className="hidden md:block" />
               attributes
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-base lg:max-w-md">
          "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover."-Mark Twain
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <div aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={props.idea}
                alt="Lightbulb"
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p className="text-sm font-medium tracking-wide text-white">
                    Idea conceptualization
                </p>
              </div>
            </div>
          </div>
          <div aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="w-full h-56 md:h-64 xl:h-80"
                src={props.test}
                alt="Test Tube"
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p className="text-sm font-medium tracking-wide text-white">
                    Research and Testing
                </p>
              </div>
            </div>
          </div>
          <div href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="w-full h-56 md:h-64 xl:h-80"
                src={props.network}
                alt="Network"
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p className="text-sm font-medium tracking-wide text-white">
                  Teamwork
                </p>
              </div>
            </div>
          </div>
          <div href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="w-full h-56 md:h-64 xl:h-80"
                src={props.atom}
                alt="Atom"
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p className="text-sm font-medium tracking-wide text-white">
                  Problem Solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>   
    );
}

export default Specilizatiion;