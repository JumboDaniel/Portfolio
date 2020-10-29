import React from 'react';

const Body = () => {
    return ( 
        <main className=''>
            <div className='pl-32 px-35 py-20 md:col-span-2 bg-primary'>
                <header >
                    <h4 className='py-1 px-1 font-light font-semibold text-secondary-200'>Hi, my name is  </h4>
                    <h2 className='py-1 leading-loose text-6xl font-bold text-secondary-200'><b className='bg-blue'>Jumbo Daniel</b> <span role="img" aria-label="wave">👋</span> </h2>
                    <h3 className='py-1 leading-loose text-6xl font-bold text-secondary-100'>I build things for the web</h3>    
                </header>
                <div className='' style={{maxWidth: "500px"}}>
                <p className='py-5 leading-loose text-secondary-100'>Full Stack Web Developer. An ambitious problem solver with a passion for the internet, and who would like to learn from a team of like-minded developers. Revival is thorough and precise in everything he does, and has a keen interest in technology, mobile applications and user experience</p>
                </div>
            </div>
        </main>
     );
}
 
export default Body;