import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from './NewsDetails';
import MainNavber from './Pages/Home/Homenav/MainNavber';

const AllNews = () => {
    const data = useLoaderData();

    return (
        <div>
              <MainNavber></MainNavber>
           <div>
           {
            data.map(datas=><NewsDetails key={datas.id} data={datas} ></NewsDetails>)
           }
           </div>

        </div>
    );
};

export default AllNews;