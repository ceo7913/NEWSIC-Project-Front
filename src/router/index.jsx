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
            path: 'NEWSIC-Project-Front',
            element: <Home/>,
            children:[
                {
                    // 이런식으로 하위 페이지 라우터를 설정할 수 있음
                    // path:'issueLog',
                    // element:<></>,
                },
                {
                    // path:'about',
                    // element:<></>,
                },
            ]
            
        },
        {
            path:'fund',
            element:<FundingContainer/>,
        },
        {
            path:'nft',
            element:<NftMarketContainer/>,
        },
        {
            path:'music',
            element:<MusicContainer/>,
        },
        {
            path:'siteinfo',
            element:<SiteInfo/>,
        },
        {
            path:'subscription',
            element:<SubscriptionContainer/>,
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