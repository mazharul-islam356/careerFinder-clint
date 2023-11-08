import { TableTitle } from "../../Head/Head";
import Section01 from "../ExtraSection/Section01";
import Section02 from "../ExtraSection/Section02";
import BonusSection from "../ExtraSection/BonusSection";
import Banner from "./Banner/Banner";
import TabSection from "./JobByCategory/TabSection";

const Home = () => {
    TableTitle('CareerFinder | Home')
    return (
        <div>
          

            <Banner></Banner>
            <TabSection></TabSection>
            <Section01></Section01>
            <Section02></Section02>
            <BonusSection></BonusSection>
           
            
        </div>
    );
};

export default Home;