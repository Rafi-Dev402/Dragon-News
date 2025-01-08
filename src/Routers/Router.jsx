import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

import News from "../Components/News";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children:[
        {
          path:'/',
          element: <Navigate to={'/category/:01'}></Navigate>
        },
        {
          path:'/category/:id',
          element:<News/>,
          loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
        
      ]
      
    },
  ]);

  export default router;