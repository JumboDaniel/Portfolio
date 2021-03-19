import React from 'react';
import Movie from '../../../src/images/Movie.png'
import Calculator from '../../../src/images/Calculator.png'
import Christvineyard from '../../../src/images/Christvineyard.png'
import Candino from '../../../src/images/Candino.png'
import HFDI from '../../../src/images/HFDI.png'
import Todolist from '../../../src/images/Todolist.png'
import Nodeblog from '../../../src/images/Nodeblog.png'
import Weatherapp from '../../../src/images/Weatherapp.png'
const Projectgrid = () => {
    return (
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            <a href="/"  target='blank'  aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Movie}
                alt="movie app"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Movie App</p>
                <p className="text-sm tracking-wide text-gray-300">
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Calculator}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Basic Vanilla JS Calculator
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                </p>
              </div>
            </div>
          </a>
          <a href="https://christvineyardministries.org.ng/" target='blank' aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Christvineyard}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Christ Vineyard Ministries</p>
                <p className="text-sm tracking-wide text-gray-300">
                </p>
              </div>
            </div>
          </a>
          <a href="http://demo.christvineyardministries.org.ng/" target='blank' aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Candino}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Candino West Africa LTD
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                </p>
              </div>
            </div>
          </a>
          <a href="https://hfdiglobalconsulting.com/" target='blank' aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={HFDI}
                alt="HFDI"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  HFDI Global Consulting Firm
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                </p>
              </div>
            </div>
          </a>
          <a href="https://jolly-pasteur-8ad199.netlify.app/" target='blank' aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Todolist}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Vanilla JS Todolist
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                </p>
              </div>
            </div>
          </a>
          <a href="/" target='blank' aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Nodeblog}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Express, Node JS Blog
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                </p>
              </div>
            </div>
          </a>
          <a href="/" target='blank' aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Weatherapp}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Vanilla JS Weatherapp 
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                </p>
              </div>
            </div>
          </a>
        </div>
    );
}

export default Projectgrid;