import img from '../../../assets/remove-img.png'
import img3 from '../../../assets/amazon.png'
import img4 from '../../../assets/dribble.png'
import img5 from '../../../assets/notion.png'
import img6 from '../../../assets/netflix.png'
import img7 from '../../../assets/zoom.png'
import img2 from '../../../assets/Screenshot (489).png'
const Banner = () => {
    return (
        <div className=' w-10/12 mx-auto mb-10'>
            <div className="hero min-h-screen bg-white ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-4">
    <img src={img} className=" ml-48" />
    <div className=' gap-4'>
      <h1 className="text-5xl gap-4 font-bold">Navigating the<br></br> digital landscape<br></br> for success</h1>
      <p className="py-6 gap-4 mt-2">Our Digital merketing agency help the business<br></br>
       Provident cupiditate voluptatem et in.
       Quaerat<br></br> fugiat 
      ut assumenda excepturi exercitationem quasi. In<br></br> deleniti eaque
       aut repudiandae et a id nisi.</p>
      <button className="btn bg-black text-white">Block a consultation</button>
    </div>
   
  </div>

</div>
<div className='lg:grid grid-cols-6  md:grid grid-cols-3 gap-28 ml-10 bg-white'>
<img className=' h-16 w-20' src={img3} alt="" />
<img className=' h-16 w-28' src={img4} alt="" />
<img className='  h-16 w-28' src={img2} alt="" />
<img className=' h-16 w-28' src={img5} alt="" />
<img className=' h-16 w-28' src={img6} alt="" />
<img className=' h-16 w-28' src={img7} alt="" />
</div>

        </div>
    );
};

export default Banner;