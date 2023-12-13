import { TableTitle } from "../../Head/Head";
import Section01 from "../ExtraSection/Section01";
import Section02 from "../ExtraSection/Section02";
import BonusSection from "../ExtraSection/BonusSection";
import Banner from "./Banner/Banner";
import TabSection from "./JobByCategory/TabSection";
import { Link } from "react-router-dom";

const Home = () => {
    
    TableTitle('CareerFinder | Home')
    return (
        <div>
          
            <Link  to="https://wa.me/+8801866186426">
            <img className="w-12 fixed ms-[83em] mt-[31em]" src="/public/whatsapp.png" alt="" />
            </Link>

            <Banner></Banner>
            <TabSection></TabSection>
            <Section01></Section01>
            <Section02></Section02>
            <BonusSection></BonusSection>
           
            
        </div>
    );
};

export default Home;