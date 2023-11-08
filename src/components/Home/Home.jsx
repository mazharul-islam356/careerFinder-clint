import Section01 from "../ExtraSection/Section01";
import Section02 from "../ExtraSection/Section02";
import Banner from "./Banner/Banner";
import TabSection from "./JobByCategory/TabSection";

const Home = () => {
    return (
        <div>
          

            <Banner></Banner>
            <TabSection></TabSection>
            <Section01></Section01>
            <Section02></Section02>
           
            
        </div>
    );
};

export default Home;