// import { useState } from "react";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllJob = () => {

    

  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/addJobs")
      .then((res) => res.json())
      .then((data) => setJobData(data));
  }, []);


  return (
    <div className="my-6 ml-16 mt-10 w-11/12 mx-auto">
      <div className="overflow-x-auto ">
     
        <table className="table">
          {/* head */}
          <thead>
            <tr>
                
              
              <th>Name</th>
              <th>Job title</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
              <th></th>
            </tr>
          </thead>
          

          <tbody>
            {jobData.map((job) => (
              <tr key={job._id}>
                <td>{job.name}</td>
                <td>{job.title}</td>
                <td>{job.postingD}</td>
                <td>{job.applicantsD}</td>
                <td>{job.salary}</td>
                <td>
                  <Link to={`/details/${job._id}`}>
                  <button className="btn btn-outline">details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
         
         
        </table>

        {
            // console.log(jobData)
        }
      </div>
    </div>
  );
};

export default AllJob;
