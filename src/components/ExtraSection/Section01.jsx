import { BsFillBarChartLineFill } from 'react-icons/bs';
import { FaSearchDollar,FaRegHandshake } from 'react-icons/fa';



const Section01 = () => {
  return (
    <div className='h-[400px] rounded-lg bg-blue-gray-100 mb-10'>
      <div className="grid lg:grid-cols-3 justify-center items-center ml-14 my-10">

        {/* card01 */}
        <div className="card w-96 mt-16 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className='text-5xl p-4 text-[#4C9AA7] ml-32'>   <BsFillBarChartLineFill></BsFillBarChartLineFill></div>
            <div className='text-center text-xl font-semibold'>Set your salary
expectations
</div>
            <div className='text-center'>Access over 15M monthly jobs* and get the up-to-date salary info you need to make informed career decisions
</div>
            
          </div>
        </div>

        {/* card02 */}
        <div className="card w-96 mt-16 bg-base-100 shadow-xl">
          <div className="card-body">
          <div className='text-5xl p-4 text-[#4C9AA7] ml-32'>   <FaSearchDollar></FaSearchDollar></div>
            <p className='text-center text-xl font-semibold'>Explore high-paying opportunities</p>
            <p className='text-center'>Browse salary info for over 35,000 job titles to find the location and role thats best for you.</p>
            
          </div>
        </div>

        {/* card03 */}
        <div className="card w-96 mt-16 bg-base-100 shadow-xl">
          <div className="card-body">
          <div className='text-5xl p-4 text-[#4C9AA7] ml-32'>   <FaRegHandshake></FaRegHandshake></div>
            <p className='text-center text-xl font-semibold'>Need to negotiate?
We have got you.</p>
          
            <p className='text-center'>Access comprehensive salary data* so you can ask for what you want with confidence.</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
