import React from 'react';
import projectdata from './projectdata'

const Projectgrid = () => {
    return (
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {projectdata.map((projectdata, index) => (
            <a href="/"  target='blank'  aria-label="View Item" key={index}>
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={projectdata.file}
                    alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">{projectdata.name}</p>
                    <p className="text-sm tracking-wide text-gray-300">
                    </p>
                </div>
            </div>
        </a>
          ))}
        </div>
    );
}

export default Projectgrid;