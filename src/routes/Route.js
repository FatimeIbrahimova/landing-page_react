import Mainroot from "../components/Mainroot";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";

export const ROUTES=[
    {
        path:"/",
        element:<Mainroot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"portfolio",
                element:<Portfolio/>
            },
            {
                path:"services",
                element:<Services/>
            },
            {
                path:"blog",
                element:<Blog/> 
            }
        ]
    }
]