import React from "react";
 const Header = ()  =>{
    return(
        <div className='hero flex flex-col px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full' style={{backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80')`}}>
        <div>
            <div className='hero-name container flex mx-auto px-6title-fontmb-4 font-medium'>
                <span className='mb-2 text-6xl'>Jumbo</span>
                <br/>
                <span className='mb-8 text-6xl'>Daniel.</span>
            </div>
            <div>
                <p>Citizen of The World</p>
            </div>
        </div>
        </div>
    )
}
export default Header;