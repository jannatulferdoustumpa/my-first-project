import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
    return (
        <Carousel className=" w-10/12 mx-auto mt-10">
            <div className="carousel carousel-center rounded-box bg-black text-white">
            <div className="card card-body p-6 bg-black  text-white carousel-item mt-5 mb-5 ml-5 mr-5">
  <div className=" rounded-box border-black p-5 border-2 border-lime-400 text-center">
  <p>We have been working to postivus for<br></br> past year Our Digital merketing agency <br></br>help the business
       Provident cupiditate<br></br> voluptatem et in.We have been <br></br>working to postivus for past year Our<br></br> Digital merketing agency help the<br></br> business
       Provident cupiditate<br></br> voluptatem et in.</p></div>
       <h1 className=" text-center">John Smith</h1>
   <p className=" text-center">SEO of Founder</p>
  </div> 
 
  <div className="card card-body p-6 bg-black   text-white carousel-item mt-5 mb-5 ml-5 mr-5">
  <div className=" rounded-box border-black p-5 border-2 border-lime-400 text-center">
  <p>We have been working to postivus for<br></br> past year Our Digital merketing agency <br></br>help the business
       Provident cupiditate<br></br> voluptatem et in.We have been <br></br>working to postivus for past year Our<br></br> Digital merketing agency help the<br></br> business
       Provident cupiditate<br></br> voluptatem et in.</p></div>
       <h1 className=" text-center">John Smith</h1>
   <p className=" text-center mb-4">SEO of Founder</p>
       <div className=" flex justify-between text-white  mt-10"><FaArrowLeft className=" mr-36"></FaArrowLeft> <FaStar className=" text-lime-300"></FaStar>
       <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>
<FaArrowRight className=" ml-36"></FaArrowRight>
</div>
   
  </div> 
  <div className="card card-body p-6 bg-black  text-white carousel-item mt-5 mb-5 ml-5 mr-5">
  <div className=" rounded-box border-black p-5 border-2 border-lime-400 text-center">
  <p>We have been working to postivus for<br></br> past year Our Digital merketing agency <br></br>help the business
       Provident cupiditate<br></br> voluptatem et in.We have been <br></br>working to postivus for past year Our<br></br> Digital merketing agency help the<br></br> business
       Provident cupiditate<br></br> voluptatem et in.</p></div>
       <h1 className=" text-center">John Smith</h1>
   <p className=" text-center">SEO of Founder</p>
   </div>
  <div className="card card-body p-6 bg-black  text-white carousel-item mt-5 mb-5 ml-5 mr-5">
  <div className=" rounded-box border-black p-5 border-2 border-lime-400 text-center">
  <p>We have been working to postivus for<br></br> past year Our Digital merketing agency <br></br>help the business
       Provident cupiditate<br></br> voluptatem et in.We have been <br></br>working to postivus for past year Our<br></br> Digital merketing agency help the<br></br> business
       Provident cupiditate<br></br> voluptatem et in.</p></div>
       <h1 className=" text-center">John Smith</h1>
   <p className=" text-center">SEO of Founder</p>
   </div>
  <div className="card card-body p-6 bg-black  text-white carousel-item mt-5 mb-5 ml-5 mr-5">
  <div className=" rounded-box border-black p-5 border-2 border-lime-400 text-center">
  <p>We have been working to postivus for<br></br> past year Our Digital merketing agency <br></br>help the business
       Provident cupiditate<br></br> voluptatem et in.We have been <br></br>working to postivus for past year Our<br></br> Digital merketing agency help the<br></br> business
       Provident cupiditate<br></br> voluptatem et in.</p></div>
       <h1 className=" text-center">John Smith</h1>
   <p className=" text-center">SEO of Founder</p>
   </div>
   
</div>

        </Carousel>
    );
};

export default Slider;