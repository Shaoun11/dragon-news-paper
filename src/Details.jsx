import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = ({nav}) => {
    const{name,id}=nav;
    
 
    return (
        <div className='block text-start text-base mt-1 font-semibold text-[#403F3F]'>
          <Link to={'/AllNews/${id}'}>{name}</Link>
        </div>
    );
};

export default Details;