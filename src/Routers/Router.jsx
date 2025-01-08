import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

import News from "../Components/News";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Page/Login";
import Register from "../Page/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children:[
        {
          path:'',
          element: <Navigate to={'/category/:01'}></Navigate>
        },
        {
          path:'/category/:id',
          element:<News/>,
          loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
        
      ]
    },
    {
      path:'/auth',
      element:<AuthLayout/>,
      children:[
        {
          path:'/auth/login',
          element:<Login/>
        },
        {
          path:"/auth/register",
          element:<Register/>
        }
      ]
    }
  ]);

  export default router;