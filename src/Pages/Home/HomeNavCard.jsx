import React from 'react';
import { FaBeer,FaRegEye } from 'react-icons/fa';
const HomeNavCard = ({news}) => {
    const{category_id,rating,total_view,title,author,thumbnail_url,image_url,details}=news;
    return (
        <div>
            <div className="relative flex max-w-[584px] mt-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <h4 className='text-lg font-semibold text-start'>{title}</h4>
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={image_url}     alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    
    <p className="mt-3 text-start block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
      {details}
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
    <div className="flex items-center -space-x-3">
      <img
        alt="natali craig"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-1"
      />
      <div
        data-tooltip="author-1"
        className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
      >
        Natali Craig
      </div>
      <img
        alt="tania andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-2"
      />
      <div
        data-tooltip="author-2"
        className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
      >
        Tania Andrew
      </div>
    </div>
    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
      January 10
    </p>
    
  </div>
  <p className="text-start flex gap-2 mb-4 ">
      <FaRegEye className='mt-1 ml-5'></FaRegEye>{total_view}
    </p>
</div>
        </div>
    );
};

export default HomeNavCard;