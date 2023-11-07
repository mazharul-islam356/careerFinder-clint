import { useEffect, useState } from "react";


const AppliedJobs = () => {

    const [appliedData, setAppliedData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/apply")
      .then((res) => res.json())
      .then((data) => setAppliedData(data));
  }, []);

    
    return (
        <div>
            <h1 className="text-3xl text-center font-serif underline font-extrabold mt-4">Applied Job</h1>
            {
                appliedData.map(data=><div key={data._id} className="card mt-4 mb-8 w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p> <span className="font-serif font-semibold">User Email:</span> {data.email}</p>
                  <p><span className="font-serif font-semibold">Resume Link: </span>{data.resume}</p>
                </div>
              </div>)
            }
            
        </div>
    );
};

export default AppliedJobs;