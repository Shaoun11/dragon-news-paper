import React from 'react';
import img1 from "../../../../public/assets/1.png"
import img2 from "../../../../public/assets/2.png"
import img3 from "../../../../public/assets/3.png"
import { FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';

const FirstNavCard = () => {
    return (
       
 <div >
               <div className='mt-8'>
  <div className=" m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className='w-[267px] h-[150px]'
      src={img1}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-1">
    <h4 className=" text-xl font-semibold font-popines  text-start">
    Bayern Slams Authorities Over Flight Delay to Club World Cup
    </h4>

   <div className='flex justify-around'>
    <div>
    <p className='mt-5 mr-24 font-medium text-base text-start'>Sports</p>
    
    </div>
    <div className='flex mt-6 mr-10'>
    <FaRegCalendar className='text-base mt-1 mr-3'></FaRegCalendar>
    {moment().format(" MMM D, YYYY")}
    </div>
   </div>
  </div>

</div>

<div className='mt-8'>
  <div className=" m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className='w-[267px] h-[150px]'
      src={img2}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-1">
    <h4 className=" text-xl font-semibold font-popines  text-start">
    Bayern Slams Authorities Over Flight Delay to Club World Cup
    </h4>

   <div className='flex justify-around'>
    <div>
    <p className='mt-5 mr-24 font-medium text-base text-start'>Sports</p>
    
    </div>
    <div className='flex mt-6 mr-10'>
    <FaRegCalendar className='text-base mt-1 mr-3'></FaRegCalendar>
    {moment().format(" MMM D, YYYY")}
    </div>
   </div>
  </div>

</div>

<div className='mt-8'>
  <div className=" m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className='w-[267px] h-[150px]'
      src={img3}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-1">
    <h4 className=" text-xl font-semibold font-popines  text-start">
    Bayern Slams Authorities Over Flight Delay to Club World Cup
    </h4>

   <div className='flex justify-around'>
    <div>
    <p className='mt-5 mr-24 font-medium text-base text-start'>Sports</p>
    
    </div>
    <div className='flex mt-6 mr-10'>
    <FaRegCalendar className='text-base mt-1 mr-3'></FaRegCalendar>
    {moment().format(" MMM D, YYYY")}
    </div>
   </div>
  </div>

</div>
 </div>
        
    );
};

export default FirstNavCard;