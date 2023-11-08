import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider";


const AppliedJobs = () => {

    const [appliedData, setAppliedData] = useState([]);
    const user = useContext(AuthContext)

    const useR = user.user.email 
    console.log(useR);

  useEffect(() => {
    fetch(`https://assingment-11-server-eight.vercel.app/apply?email/${useR}`)
      .then((res) => res.json())
      .then((data) => setAppliedData(data));
  }, [useR]);

    
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