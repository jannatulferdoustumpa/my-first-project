import img1 from '../../../assets/Screenshot (507).png'
import img2 from '../../../assets/Screenshot (508).png'
import img3 from '../../../assets/Screenshot (509).png'
import img4 from '../../../assets/Screenshot (510).png'
import img5 from '../../../assets/Screenshot (511).png'
import img6 from '../../../assets/Screenshot (512).png'
import img7 from '../../../assets/in.png'


const SixCard = () => {
    
  
    return (
        <div className=' w-10/12 mx-auto mt-10'>
        <div className=' grid grid-cols-3  gap-4'>
        <div className='card bg-base-100  rounded-2xl shadow-2xl border-2 border-black border-b-8'>
            <div className=" flex justify-between">
        <figure><img src={img1} className=' h-24 w-28' alt="Album"/></figure>
       

        <div className=" mr-8">
     <div className=' flex gap-4'>   <h2 className="card-title text-2xl mt-5 font-semibold">John Smith</h2>
     <figure><img src={img7} className='h-8 w-10 mt-5' alt="Album"/></figure>
</div>
        <p className=' text-xl'>CEO of Founder</p>
        </div>
       
        </div>
         
         <div className='ml-5 mb-5'>
        <div className=" divider divider-vertical"></div>
        <p>10+ years experience of digital<br></br> merketing.Expertise SEO,PPC<br></br>
        and content strategy.
        </p>
        </div>
           </div> 
        <div className='card bg-base-100 shadow-2xl rounded-2xl border-2 border-black border-b-8'>
            <div className=" flex justify-between">
        <figure><img src={img2} className=' h-24 w-28' alt="Album"/></figure>
        <div className="mr-8">
        <div className=' flex gap-4'>   <h2 className="card-title text-2xl mt-5 font-semibold">Jane Doe</h2>
     <figure><img src={img7} className='h-8 w-10 mt-5' alt="Album"/></figure>
</div>
        <p className=' text-xl'>CEO of Founder</p>
        </div>
       
        </div>
         
         <div className='ml-5 mb-5 '>
        <div className=" divider divider-vertical"></div>
        <p>8+ years experience of digital<br></br> merketing.Expertise SEO,PPC<br></br>
        and content strategy.
        </p>
        </div>
           </div> 
        <div className='card bg-base-100 shadow-2xl rounded-2xl border-2 border-black border-b-8'>
            <div className=" flex justify-between">
        <figure><img src={img3} className=' h-24 w-28 ' alt="Album"/></figure>
        <div className="mr-8">
        <div className=' flex gap-2'>   <h2 className="card-title text-2xl mt-5 font-semibold">Michel Brown</h2>
     <figure><img src={img7} className='h-8 w-10 mt-5' alt="Album"/></figure>
</div>
        <p className=' text-xl'>CEO of Founder</p>
        </div>
       
        </div>
         
         <div className='ml-5 mb-5 '>
        <div className=" divider divider-vertical"></div>
        <p>4+ years experience of digital<br></br> merketing.Expertise SEO,PPC<br></br>
        and content strategy.
        </p>
        </div>
           </div> 
     
        <div className='card bg-base-100 shadow-2xl rounded-2xl border-2 border-black border-b-8'>
            <div className=" flex justify-between">
        <figure><img src={img4} className=' h-24 w-28 ' alt="Album"/></figure>
        <div className="mr-8">
        <div className=' flex gap-2'>   <h2 className="card-title text-2xl mt-5 font-semibold">Emily Johnsonh</h2>
     <figure><img src={img7} className='h-8 w-10 mt-5' alt="Album"/></figure>
</div>
        <p className=' text-xl'>CEO of Founder</p>
        </div>
       
        </div>
         
         <div className='ml-5 mb-5 '>
        <div className=" divider divider-vertical"></div>
        <p>7+ years experience of digital<br></br> merketing.Expertise SEO,PPC<br></br>
        and content strategy.
        </p>
        </div>
           </div> 
        <div className='card bg-base-100 shadow-2xl rounded-2xl border-2 border-black border-b-8'>
            <div className=" flex justify-between">
        <figure><img src={img5} className=' h-24 w-28 ' alt="Album"/></figure>
        <div className="mr-8">
        <div className=' flex gap-2'>   <h2 className="card-title text-2xl mt-5 font-semibold">Birian Williams</h2>
     <figure><img src={img7} className='h-8 w-10 mt-5' alt="Album"/></figure>
</div>
        <p className=' text-xl'>CEO of Founder</p>
        </div>
       
        </div>
         
         <div className='ml-5 mb-5 '>
        <div className=" divider divider-vertical"></div>
        <p>5+ years experience of digital<br></br> merketing.Expertise SEO,PPC<br></br>
        and content strategy.
        </p>
        </div>
           </div> 
        <div className='card bg-base-100 shadow-2xl rounded-2xl border-2 border-black border-b-8'>
            <div className=" flex justify-between">
        <figure><img src={img6} className=' h-24 w-28 ' alt="Album"/></figure>
        <div className="mr-8">
        <div className=' flex gap-4'>   <h2 className="card-title text-2xl mt-5 font-semibold">Sarah Kim</h2>
     <figure><img src={img7} className='h-8 w-10 mt-5' alt="Album"/></figure>
</div>
        <p className=' text-xl'>CEO of Founder</p>
        </div>
       
        </div>
         
         <div className='ml-5 mb-5 '>
        <div className=" divider divider-vertical"></div>
        <p>5+ years experience of digital<br></br> merketing.Expertise SEO,PPC<br></br>
        and content strategy.
        </p>
        </div>
           </div> 
           
         <div className=''>
         <button className='btn bg-black text-white'>See all term</button>
         </div>
        </div> 
        </div>
    );
};
          

export default SixCard;