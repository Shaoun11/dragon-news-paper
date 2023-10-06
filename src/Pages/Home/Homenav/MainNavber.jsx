import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logouser from "../../../../public/assets/user.png";
import { Authcontext } from '../../../Authrovider';
import toast from 'react-hot-toast';

const MainNavber = () => {
    const link=<div className=' lg:flex gap-3'>
    <li> <NavLink to={"/"} >Home</NavLink> </li>
    <li> <NavLink to={"/allnews"} >All News</NavLink> </li>

    <li> <NavLink to={"/about"}>About</NavLink> </li>
    </div>
    const {logout,user}=useContext(Authcontext);
    const handlelogout=()=>{
      logout()
      .then(res => {
        toast.success('User log out in successfully');
     
    })
    .catch(error => {
        toast.error(error.message)
    })
    }


    return (
        <div className='max-w-6xl mx-auto'>
            <div className="navbar  bg-base-100">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow   w-52">
        {link}
      </ul>
    </div>
 
  </div>
  <div className="navbar-center hidden lg:flex gap-3">
    <ul className="menu menu-horizontal px-1">
    {link}
    </ul>
  </div>
  <div className="flex gap-3 navbar-end">
    <div>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        {user? <div className="w-14  rounded-full">
          <img src={user?.photoURL}/>
        </div>:<div className="w-14  rounded-full">
          <img src={logouser}/>
        </div>}
      </label>
    </div>
   <div>
    {
      user?<Link >  <button onClick={handlelogout} className="btn btn-outline ">Log Out</button></Link> :
      <Link to={"/login"}>  <button className="btn btn-outline ">Log in</button></Link>
 
    }
  
   </div>

  </div>
</div>
        </div>
    );
};

export default MainNavber;