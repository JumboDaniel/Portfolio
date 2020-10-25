import React from 'react';
const Sidenav = () => {
    return ( 
        <div className='md:col-span-1 md:flex mx-8 py-10'>
            <nav className=''>
                <div className=''>
                    <img alt='Profile' className='py-10' />
                </div>
                <div className='pb-20'>
                    <p>A MERN stack developer & constant learner</p>
                </div>
                <div>
                    <ul className=' py-10 flex justify-between items-right'>
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Sidenav;