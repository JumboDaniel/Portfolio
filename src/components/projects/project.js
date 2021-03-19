import React from 'react';
import Footer from '../footer';
import Projectgrid from './projectgrid'

const Project = () => {
    return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              My personal project and freelance jobs
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
            <span className='text-xl font-bold'>"</span> Nothing's perfect, the world's not perfect. 
            But it's there for us, trying the best it can; 
            that's what makes it so damn beautiful.<span className='text-xl font-bold'>"</span>
          </p>
        </div>
        <Projectgrid/>
      </div>
      <Footer/>
      </div>
    );
}

export default Project;