import React, {useState, useEffect} from 'react';
const Footer = () =>{
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])

    return(
        <footer className='bg-primary'>
        <div className='flex flex-row max-w-xl space-x-36 justify-between container text-left px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full'>
            <div className='flex flex-col px-8 py-6 lg:w-1/3 md:w-full'>
                <div>
                    <p className='tracking-normal font-semibold pb-4'>
                        Your Friend, Your Father, Your Confidant.
                    </p>
                </div>    
                <div className='flex flex-row space-x-4'>
                    <a href='https://github.com/JumboDaniel' target='blank'> <img alt="Github" src="https://img.icons8.com/doodle/32/000000/github--v1.png"/></a>
                    <a href='https://www.instagram.com/jr.jumbo /' target='blank'> <img alt="Instagram" src="https://img.icons8.com/doodle/32/000000/instagram-new.png"/></a>
                    <a href='https://www.linkedin.com/in/revival-jumbo-8704781bb/' target='blank'> <img alt="LinkedIN" src="https://img.icons8.com/android/32/000000/linkedin.png"/></a>
                    <a href='https://twitter.com/JumboDaniel4' target='blank'> <img alt="Twitter" src="https://img.icons8.com/ultraviolet/32/000000/twitter.png"/></a>
                </div>

            </div>        
    
            <div className='flex flex-row px-8 py-6 lg:w-1/3 md:w-full'>
                <p> 
                    &copy; Jumbo Daniel {date}
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;