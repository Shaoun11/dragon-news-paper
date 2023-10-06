import React from 'react';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import img1 from '../../../../public/assets/qZone1.png';
import img2 from '../../../../public/assets/qZone2.png';
import img3 from '../../../../public/assets/qZone3.png';
const Rightsidenav = () => {
    return (
        <div>
            <div className='p-4'>
                <h1 className='text-2xl ml-1 font-medium text-start mb-2 '>Login With</h1>
                <button className="btn btn-outline w-full ">
                <FaGoogle></FaGoogle>
                    login With google
                </button>
                <button className="btn btn-outline w-full mt-3 ">
                <FaGithub></FaGithub>
                    login With gthub
                </button>
            </div>
            <div className='p-4'>
                <h2 className='mb-1 font-semibold text-start ml-1 text-2xl'>Find Us On</h2>

                <a className='p-4  flex items-center text-lg border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span className='font-medium'>Facebook</span>
                </a>

                <a className='p-4 flex items-center text-lg border rounded-x' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span className='font-medium'>Twitter</span>
                </a>

                <a className='p-4 flex items-center text-lg border rounded-b-lg' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span className='font-medium'>Instagram</span>
                </a>
            </div>
            <div className='mt-10 bg-gray-200 p-2 '>
                <h1 className='text-2xl font-semibold text-start ml-3 mb-5'>Q Zone</h1>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img className='mb-10' src={img3} alt="" />
            </div>
        </div>
    );
};

export default Rightsidenav;