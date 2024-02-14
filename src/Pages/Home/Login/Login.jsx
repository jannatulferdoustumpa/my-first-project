import img from '../../../assets/Screenshot (513).png'
const Login = () => {
    return (
        <div className=' w-10/12 mx-auto mt-10'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="lg:text-left">
      <img src={img} className=' ml-28' alt="login" />
    </div>
    <div className="card shrink-0 w-full max-w-sm ">
      <form className="card-body">
      <div className=' flex gap-5 mb-40'>
      <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Say Hi</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-green-400" checked />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Get a Quote</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-green-400" checked />
  </label>
  </div>
</div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email*</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Massage*</span>
          </label>
          <input type="Massage" placeholder="Massage" className="input input-bordered h-40" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-xl bg-black text-white">Start Message</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;