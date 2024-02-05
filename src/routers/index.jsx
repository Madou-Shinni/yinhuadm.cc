import React, {lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";


const Home = lazy(()=>import('@/pages/home/Home.jsx'));
const Detail = lazy(()=>import('@/pages/detail/Detail.jsx'));
const Search = lazy(()=>import('@/pages/search/Search.jsx'));
const More = lazy(()=>import('@/pages/more/More.jsx'));

const Router = React.memo(()=>{
    const element = useRoutes(
        [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/search',
                element: <Search/>
            },
            {
                path:'/book/:id',
                element: <Detail/>
            },
            {
                path:'/more/:key',
                element: <More/>
            },
            {
                path:'*',
                element: <Navigate to={'/'}/>
            },
        ]
    )
    return <React.Suspense>{element}</React.Suspense>
})

export default Router