import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import Casestudies from "../CaseStudies/Casestudies";
import CommentBox from "../CommentBox/CommentBox";
import ContactUs from "../ContactUs/ContactUs";
import Divider from "../Divider/Divider";
import Login from "../Login/Login";

import Service from "../Service/Service";
import SixCard from "../SixCard/SixCard";
import Slider from "../Slider/Slider";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import WorkingProcess from "../WorkingProcess/WorkingProcess";
import MediaQuery from 'react-responsive'



const Home = () => {
    
    return (
        <div>
            <MediaQuery minWidth={1224}></MediaQuery>
            <Banner></Banner>
            <Service></Service>
            <Card></Card>
            <Cards></Cards>
            <Casestudies></Casestudies>
            <Divider></Divider>
            <WorkingProcess></WorkingProcess>
            <CommentBox></CommentBox>
            <Team></Team>
            <SixCard></SixCard>
            <Testimonial></Testimonial>
            <Slider></Slider>
            <ContactUs></ContactUs>
            <Login></Login>
           
        </div>

    );
};

export default Home;