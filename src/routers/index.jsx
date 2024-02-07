import React, {lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";


const Home = lazy(()=>import('@/pages/home/Home.jsx'));
const Detail = lazy(()=>import('@/pages/detail/Detail.jsx'));
const Search = lazy(()=>import('@/pages/search/Search.jsx'));
const More = lazy(()=>import('@/pages/more/More.jsx'));
const Play = lazy(()=>import('@/pages/play/Play.jsx'));

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
                path:'/video/:id',
                element: <Detail/>
            },
            {
                path:'/play/:id/:sid/:nid',
                element: <Play/>
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