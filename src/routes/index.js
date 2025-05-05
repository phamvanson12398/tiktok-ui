import Home from '../pages/Home';
import Following from '../pages/Following';
import LayoutCustom from '../components/Layout/LayoutCustom';// import { Component } from 'react';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
const publicRoutes =[
    {path:'/',component :Home},
    {path:'/following',component :Following},
    {path:'/profile',component :Profile},
    {path:'/upload',component :Upload , layout: LayoutCustom },
    {path:'/search',component :Search , layout: null},

]
const privateRoutes =[
    
]


export {privateRoutes,publicRoutes}