
import { FaArrowAltCircleUp } from 'react-icons/fa';
import img1 from '../../../assets/Screenshot (497).png'
import img2 from '../../../assets/Screenshot (498).png'
import img3 from '../../../assets/Screenshot (499).png'
import img4 from '../../../assets/Screenshot (500).png'
import img5 from '../../../assets/Screenshot (501).png'
import img6 from '../../../assets/Screenshot (503).png'
const Card = () => {
    
    return (
        <div className=' w-10/12 mx-auto grid grid-cols-2  gap-8'>
            <div className=" mt-8 card  h-80 lg:card-side bg-base-100 shadow-xl rounded-box bg-neutral-100">
     <h2 className="card-title text-2xl font-semibold bg-lime-300 h-20 w-96 mt-5 ml-3">Search Engine Optimization</h2>
     <div className='mt-64 text-2xl flex'>
        <FaArrowAltCircleUp className=' rotate-45'></FaArrowAltCircleUp>
        <h1 className=''>Learn more</h1>
     </div>
    <figure><img  src={img1} alt="Album"/></figure>
</div>
            <div className=" mt-8 card h-80 lg:card-side  bg-lime-300 shadow-xl rounded-box bg-base-100 ">
     <h2 className="card-title text-2xl font-semibold ml-5 bg-white h-20 w-52 mt-5">Pay-Per-Click Advertising</h2>
     <h1 className='mt-64 -ml-20 text-2xl flex'>
        <FaArrowAltCircleUp className=' rotate-45'></FaArrowAltCircleUp>Learn more
        
     </h1>
    <figure><img className=' w-96 mr-10' src={img2} alt="Album"/></figure>
</div>
            <div className=" mt-8 card h-80 lg:card-side bg-base-100 shadow-xl rounded-box bg-black text-white">
     <h2 className="card-title text-2xl font-semibold text-black bg-white h-20 w-48 mt-5 ml-3">Social media merketing</h2>
     <h1 className='mt-64 -ml-20 text-2xl flex'>
        <FaArrowAltCircleUp className=' rotate-45'></FaArrowAltCircleUp>Learn more
     </h1>
    <figure><img className=' w-96 mr-10' src={img3} alt="Album"/></figure>
</div>
            <div className="mt-8  card h-80 lg:card-side bg-base-100 shadow-xl rounded-box bg-neutral-100">
     <h2 className="card-title text-2xl font-semibold ml-5 bg-lime-300 h-16 w-36 mt-5">Email merketing</h2>
     <h1 className='mt-64 -ml-20 text-2xl flex'>
        <FaArrowAltCircleUp className=' rotate-45'></FaArrowAltCircleUp>Learn more
     </h1>
    <figure><img className=' w-96 h-96' src={img4} alt="Album"/></figure>
</div>
       
            <div className=" mt-8 card h-80 lg:card-side bg-base-100 shadow-xl rounded-box bg-lime-300">
     <h2 className="card-title text-2xl font-semibold ml-5 text-black bg-white h-20 mt-5 w-32">Content Creation</h2>
     <h1 className='mt-64 -ml-20 text-2xl flex'>
        <FaArrowAltCircleUp className=' rotate-45'></FaArrowAltCircleUp>Learn more
     </h1>
    <figure><img className=' w-96 mr-10' src={img5} alt="Album"/></figure>
</div>
            <div className="mt-8  card h-80 lg:card-side bg-base-100 shadow-xl rounded-box bg-black text-white">
     <h2 className="card-title text-2xl font-semibold ml-5 bg-lime-300 h-16 w-52 text-black mt-5">Analaytics and tracking </h2>
     <h1 className='mt-64 -ml-20 text-2xl  flex'>
        <FaArrowAltCircleUp className=' rotate-45'></FaArrowAltCircleUp>Learn more
     </h1>
    <figure><img className=' w-96 mr-10' src={img6} alt="Album"/></figure>
</div>
</div>
    );
};

export default Card;