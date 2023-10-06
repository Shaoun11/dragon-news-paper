import React, { useEffect, useState } from 'react';
import Header from '../header';
import Latestupdate from './latestupdate';
import moment from 'moment/moment';
import Firstsidenav from './Homenav/Firstsidenav';
import Rightsidenav from './Homenav/Rightsidenav';
import MainNavber from './Homenav/MainNavber';
import HomeNavCard from './HomeNavCard';

const Home = () => {
    const [news,setnews]=useState([]);
    useEffect(()=>{
        fetch("./news.json")
        .then(res=>res.json())
        .then(data=>setnews(data))
    },[])
    return (
        <div>
            <Header></Header>
           
            <p className='text-[#706F6F] font-normal font-popines text-lg'>Journalism Without Fear or Favour</p>
     
            <p className='text-[#706F6F] font-normal font-popines text-base'><span className='font-semibold'>{moment().format("dddd")}</span>{moment().format(" MMMM D, YYYY")}</p>
         <Latestupdate></Latestupdate>
          <MainNavber></MainNavber>
         <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div>
                <Firstsidenav></Firstsidenav>
            </div>
            <div className='col-span-2 '>
              <div>
                <h1 className='text-xl font-medium text-start'>Dragon News Home</h1>
              </div>
              {
                news.slice(0,2).map(newsdata=><HomeNavCard key={newsdata.id} news={newsdata}></HomeNavCard>)
              }
            </div>
            <div>
                <Rightsidenav></Rightsidenav>
            </div>
         </div>
        </div>

    );
};

export default Home;