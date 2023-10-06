import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FirstNavCard from './FirstNavCard';
import Details from '../../../Details';

const Firstsidenav = () => {
    const [catagories, setcatagories] = useState([]);
    useEffect(() => {
        fetch("./categories.json")
            .then(res => res.json())
            .then(res => setcatagories(res))
    }, [])
    return (
        <div className=''>
            <h1 className='text-xl font-bold mb-4 text-start '><span className='bg-[#F3F3F6] rounded p-2'>All Caterogy</span></h1>
            {
              catagories.map(catagorie=> <Details  nav={catagorie} key={catagorie.id}  ></Details>   )
            }
            <FirstNavCard></FirstNavCard>
        </div>
    );
};

export default Firstsidenav;