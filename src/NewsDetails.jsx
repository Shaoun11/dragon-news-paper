import React from 'react';
import MainNavber from './Pages/Home/Homenav/MainNavber';

const NewsDetails = ({data}) => {
    const{category_id,rating,total_view,title,author,thumbnail_url,image_url,details}=data;
    console.log(data);
    return (
        <>
      
        <div>
            
            <div className="relative flex max-w-full mt-10 flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
                
  <div className="relative m-0  items-center flex justify-center overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className='w-[599px] h-[540px]'
      src={thumbnail_url}     alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    
    <p className="mt-3 text-start block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
      {details}
    </p>
            
        </div>
        </div>
        </div>
        </>
       

    );
};

export default NewsDetails;