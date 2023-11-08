import { Link } from "react-router-dom";

const Section02 = () => {
  return (
    <div>
      <div className="h-[450px] grid justify-center items-center mb-10 ">
        <div className="text-center text-[#4C9AA7]">
          <h1 className="text-6xl">NEED TO HIRE?</h1>
          <p className="text-2xl w-96 mx-auto">
            Let our matching technology find you qualified candidates quickly.
          </p>
        <Link to='/'> <button className="btn mt-4 btn-accent btn-outline">Post job for free</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Section02;
