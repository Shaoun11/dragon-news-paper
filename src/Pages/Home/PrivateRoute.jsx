import { useContext } from "react";
import { Authcontext } from "../../Authrovider";
import { Navigate } from "react-router-dom";




const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(Authcontext);
    if (loader) {
        return <div><span className=" bg-red-600 mt-72 loading loading-ring loading-lg"></span><p>Loding...</p></div>
    }
    if (user) {
        return children
    }
     return <Navigate to={"/login"} ></Navigate>
  
};

export default PrivateRoute;