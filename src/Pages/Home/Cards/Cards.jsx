import img from '../../../assets/Screenshot (504).png'

const Cards = () => {
    return (
       <div className=' w-10/12 mx-auto mt-10'>
            <div className="card lg:card-side bg-neutral-100 shadow-2xl rounded-2xl">
                <div className=' card-body'>
            <h2 className="card-title">Let's make things happen</h2>
    <p >Contact us today our digital merketing agency can help your business grow and help us.</p>
    <div className=''> <button className=' btn bg-black text-white'>get you free proposal</button></div></div>
    <figure><img className=' h-60 w-96 ml-80 mr-10' src={img} alt="Album"/></figure>
    
    </div>
    </div>
    );
};

export default Cards;