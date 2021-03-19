import React from 'react';
import Header from'./header'
import Footer from './footer'
const Body = () => {

    return ( 
        <div className="">
            <Header/>
        <section className="text-gray-700 body-font">
        <div className="container px-8 py-32 mx-auto lg:px-4">
            <div className="flex flex-wrap text-left">
                <div className="px-8 py-6 lg:w-1/3 md:w-full">
                    <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">Longer Information 1
                    </h2>
                    <p className="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                        Distillery
                        hexagon disrupt edison bulbche.</p>
                    <a href="abc.com"
                        className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                        Learn More
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                            height="20" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                    </a>
                </div>
                <div className="px-8 py-6 lg:w-1/3 md:w-full">
                    <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">Longer Information 2
                    </h2>
                    <p className="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                        Distillery
                        hexagon disrupt edison bulbche.</p>
                    <a href="abc.com"
                        className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                        Learn More
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                            height="20" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                    </a>
                </div>
                <div className="px-8 py-6 lg:w-1/3 md:w-full">
                    <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">Longer Information 2
                    </h2>
                    <p className="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                        Distillery
                        hexagon disrupt edison bulbche.</p>
                    <a href="abc.com" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                        Learn More
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                            fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        </section>
        <Footer/>
    </div>       
     );
}
 
export default Body;