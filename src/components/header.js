import React from "react";

 const Header = ()  =>{
        const hrStyle = {
            borderTop:' 8px solid white',
            fontSize:'45px',
            width:'100px'
          };
    return(
        <div>
            <div className='px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32 bg-no-repeat	bg-center bg-cover h-2/6' style={{backgroundImage:  `url(${process.env.PUBLIC_URL + '/Images/devdesk.jpg'})`}}>

                    <div className='hero-name container mx-auto  title-font font-medium text-white' style={{fontSize:'115px'}}>
                        Jumbo Daniel.
                        <hr style={hrStyle}/>
                    </div>
                    <div className='text-center text-black'>
                        <p>Citizen of The World</p>
                    </div>
            </div>
        </div>
    )
}
export default Header;