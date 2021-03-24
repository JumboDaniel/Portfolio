import React from 'react';
import Specilizatiion from './specilizatiion'
import Close from './close'
import Footer from '../footer'
import lightbulb from '../../../src/images/lightbulb.svg'
import test from '../../../src/images/test.svg'
import network from '../../../src/images/network.svg'
import atom from '../../../src/images/atom.svg'
import devsetup from '../../../src/images/devsetup.jpg'
const Bio = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Hello, I'm
                    <br className="md:block" />
                    Jumbo Daniel
                    <span className="relative px-1">
                        <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                        <span className="relative inline-block text-deep-purple-accent-400">
                        
                        </span>
                    </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                    I am a full stack web developer who likes to make things work. I love solving problems. I love adventures, learning new things, random facts, and intellectual conversations. I enjoy working in teams- members contribute different perspectives, and joint action among team members can produce creative and effective results
                    </p>
                </div>
                <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                    <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                    <div className="h-full p-5 border border-l-0 rounded-r">
                        <h6 className="mb-2 font-semibold leading-5">
                        I'll be sure to note that in my log
                        </h6>
                        <p className="text-sm text-gray-900">
                        Lookout flogging bilge rat main sheet bilge water nipper fluke
                        to go on account heave down.
                        </p>
                    </div>
                    </div>
                    <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                    <div className="h-full p-5 border border-l-0 rounded-r">
                        <h6 className="mb-2 font-semibold leading-5">
                        A business big enough that it could be listed
                        </h6>
                        <p className="text-sm text-gray-900">
                        Those options are already baked in with this model shoot me an
                        email clear.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                <img
                    className="object-cover w-full shadow-lg sm:h-96"
                    src={devsetup}
                    alt=""
                />
                </div>
            </div>
            </div> 
            <Specilizatiion idea={lightbulb} test={test} network={network} atom={atom}/>
            <Close/>
            <Footer/>
        </div>
    );
}

export default Bio;
