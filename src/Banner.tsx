import BannerLogo from './assets/banner-stack.png'

const Banner = () => {
  return (
    <div className='grid grid-cols-2 container mx-auto px-16'>
      <div className='flex flex-col justify-center'>
        <h1 className='font-bold text-6xl my-6'>Build Your Ideal<br/><span className='font-bold text-6xl grad-fg'>Development Stack</span></h1>
        <p className='text-[#475569]'>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className='my-4 flex gap-4'>
            <button className='btn btn-primary mygrad'>Explore Technologies</button><button className='btn'>Learn More</button>
        </div>  
        </div>
      <div className="flex justify-end">
        <img src={BannerLogo} className="" alt="" />
      </div>
    </div>
  );
};

export default Banner;
