import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Mainlayout/Mainlayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";

import AllNews from "./AllNews";
import PrivateRoute from "./Pages/Home/PrivateRoute";


const Route = createBrowserRouter([{
    path:"/",
    element:<Mainlayout></Mainlayout>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
  {
        path:'/allnews',
        element:<PrivateRoute><AllNews></AllNews></PrivateRoute>,
        loader:()=>fetch('./news.json')
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
]
}])

export default Route;