import {  FaArrowUp } from "react-icons/fa";


const Divider = () => {
    return (
        <div>
        <div className=" w-10/12 mx-auto  p-20 mt-10  bg-base-100 shadow-2xl rounded-2xl bg-black text-white  h-60">
            <div className=" divider mt-2  ml-2">
  <p>For a local resturent.We<br></br> implement a tergeted PPC<br></br> campaign that result in a <br></br> 50%increased a website traffic <br></br>and 25% sale.</p>

  <div className=" divider divider-horizontal bg-white h-28 -mt-10"></div>
  
  <p className=" ml-10">For a local resturent.We<br></br> implement a tergeted PPC<br></br> campaign that result in a <br></br>50% increased a website traffic <br></br>and 25% sale.</p>
  
  <div className=" divider divider-horizontal bg-white h-28 -mt-10"></div>
  <p className=" ml-10">For a local resturent.We <br></br> implement a tergeted PPC<br></br> campaign that result in a <br></br>50% increased a website traffic <br></br>and 25% sale.</p>
 
</div>
<div className=" flex">
<h1 className=" text-xl flex mt-14 ml-2 text-lime-500">Learn more   <FaArrowUp className=" ml-3 rotate-45"></FaArrowUp> </h1>
<h1 className=" text-xl flex mt-14  ml-48 text-lime-500">Learn more  <FaArrowUp className="ml-3 rotate-45"></FaArrowUp> </h1>
<h1 className=" text-xl flex mt-14  ml-60 text-lime-500">Learn more  <FaArrowUp className="ml-3 rotate-45"></FaArrowUp></h1>
</div>
        </div>
     </div>
    );
};

export default Divider;