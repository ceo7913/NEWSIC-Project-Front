import { useRoutes } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import Layout from './../components/Layout';
import FundingContainer from './../pages/reward/index';
import NftMarketContainer from './../pages/NFTmarket/index';
import MusicContainer from './../pages/music/index';
import SubscriptionContainer from './../pages/subscription/index';
import SiteInfo from "./../pages/newsic_is";



function Router(){
    const routes =[
        {
            path: 'NEWSIC-Project-Front/',
            element: <Home/>,
            children:[
                {
                    path:'NEWSIC-Project-Front/fund',
                    element:<FundingContainer/>,
                },
                {
                    path:'NEWSIC-Project-Front/nft',
                    element:<NftMarketContainer/>,
                },
                      
                {
                    path:'NEWSIC-Project-Front/music',
                    element:<MusicContainer/>,
                },
                {
                    path:'NEWSIC-Project-Front/siteinfo',
                    element:<SiteInfo/>,
                },
                {
                    path:'NEWSIC-Project-Front/subscription',
                    element:<SubscriptionContainer/>,
                },
            ]
            
        },
        // {
        //     path:'Main',
        //     element:<MainPage/>,
        // },
        // {
        //     path:'Cover',
        //     element:<CoverPage/>,
        // },
    ]
    return useRoutes(routes)
}
export default Router;