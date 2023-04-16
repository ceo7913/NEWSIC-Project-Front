import { useRoutes } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import Layout from './../components/Layout';
import FundingContainer from './../pages/reward/index';
import NftMarketContainer from './../pages/NFTmarket/index';
import MusicContainer from './../pages/music/index';
import SubscriptionContainer from './../pages/subscription/index';
import SiteInfo from "./../pages/newsic_is";
import SignUp from "../pages/sign_up";
import MyPage from "../pages/mypage";
import { MyPageCreator } from "../components";

import FundingDetail from "../pages/reward/detail/FundingDetail";
import NftDetailContainer from "../pages/NFTmarket/detail/NftDetailContainer";
import MusicDetail from "../pages/music/detail/MusicDetail";


function Router(){
    const routes =[
        {
            path: 'NEWSIC_Front-Project/',
            element: <Home/>,
            children:[
            ]
            
        },
        {
            path:'NEWSIC_Front-Project/fund',
            element:<FundingContainer/>,
        },
        {
            path:'NEWSIC_Front-Project/fund/detail',
            element:<FundingDetail/>,
        },
        {
            path:'NEWSIC_Front-Project/nft',
            element:<NftMarketContainer/>,
        },
        {
            path:'NEWSIC_Front-Project/nft/detail',
            element:<NftDetailContainer/>,
        },
              
        {
            path:'NEWSIC_Front-Project/music',
            element:<MusicContainer/>,
        },
        {
            path:'NEWSIC_Front-Project/music/detail',
            element:<MusicDetail/>,
        },
        {
            path:'NEWSIC_Front-Project/siteinfo',
            element:<SiteInfo/>,
        },
        {
            path:'NEWSIC_Front-Project/subscription',
            element:<SubscriptionContainer/>,
        },
        {
            path:'NEWSIC_Front-Project/signup',
            element:<SignUp/>,
        },
        {
            path:'NEWSIC_Front-Project/mypage',
            element:<MyPage/>,
        },
        {
            path:'NEWSIC_Front-Project/mypage/creator',
            element:<MyPageCreator/>,
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