import React, {useState, useEffect} from 'react';
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'

const Footer = () =>{
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])

    return(
        <footer className='bg-primary'>
        <div className='flex flex-row-2 max-w-xl space-x-36 justify-between container text-left px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full'>
            <div className='flex flex-col px-8 py-6 lg:w-1/3 md:w-full'>
                <div>
                    <p className='leading-loose'>
                        Your Friend, <br/>Your Father, <br/>Your Confidant.
                    </p>
                </div>    
                <div className='flex flex-row space-x-4'>
                    <a href='https://github.com/JumboDaniel' target='blank'> <img src={github} alt='gtihub' /></a>
                    <a href='https://www.instagram.com/jr.jumbo /' target='blank'> <img src={instagram} alt='instagram' /></a>
                    <a href='https://www.linkedin.com/in/revival-jumbo-8704781bb/' target='blank'> <img src={linkedin} alt='linkedin' /></a>
                    <a href='https://twitter.com/JumboDaniel4' target='blank'> <img src={twitter} alt='twitter' /></a>
                </div>

            </div>        
    
            <div className='flex px-8 py-4 lg:w-1/3 md:w-full'>
                <p> 
                    &copy; Jumbo Daniel {date}
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;