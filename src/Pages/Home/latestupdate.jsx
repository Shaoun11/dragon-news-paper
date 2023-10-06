import React from 'react';
import Marquee from "react-fast-marquee";

const Latestupdate = () => {
    return (
        <div  className='flex gap-[3px]  mt-8 max-w-6xl bg-gray-200 mx-auto '>
            <div><button className='bg-[#D72050]  px-7 mt-1 ml-1 py-3 mb-1 font-semibold text-white'>Latest</button></div>
            <Marquee pauseOnHover={true} className='font-semibold text-lg mt-1 '>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as!Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Marquee>
  
        </div>
    );
};

export default Latestupdate;