import React from 'react';
const Close = () => {
    const hrStyle = {
        borderTop:' 8px solid black',
        fontSize:'45px',
        width:'60px'
      };
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-3/4 leading-loose'>
                    <p className="text-2xl">
                        I have probably bored you out with all this talk about myself
                    </p>
                    <p className="text-2xl leading-loose">
                        I'm sorry...
                    </p>
                    <hr style={hrStyle} className='mb-5'/>
                    <p>
                        Let's talk more about you this time! Say <a href="mailto:jumbodaniel15@gmail.com?subject=Hello from the other side" className='font-bold'>Hello</a> from the other side.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Close;