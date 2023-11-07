// import { useState } from "react";

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllJob = () => {

  const [searchValue, setSearchValue] = useState("");



  // console.log(searchValue);

 const jobData = useLoaderData()
  


  return (
    <div className="my-6 ml-16 mt-10 w-11/12 mx-auto">
      <div className="overflow-x-auto ">

      <div className="input-group ">
               

                <input
                onChange={(e)=>{setSearchValue(e.target.value)}}
                value={searchValue}
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-[1108px]"
                />
                <button className="btn btn-square w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
             
              </div>
     
              <div>
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
{
          jobData
 .filter((item) => {
   return searchValue.toLowerCase() === ""
     ? item
     : item.category.toLowerCase().includes(searchValue);
}).map(card=><tbody key={card._id}>
  {
    <tr key={card._id}>
      <td>{card.name}</td>
      <td>{card.title}</td>
      <td>{card.postingD}</td>
      <td>{card.applicantsD}</td>
      <td>{card.salary}</td>
      <td>
        <Link to={`/details/${card._id}`}>
        <button className="btn btn-outline">details</button>
        </Link>
      </td>
    </tr>
  }
</tbody>)


}
          

          
         
         
        </table>
        </div>

        {
            // console.log(jobData)
        }
      </div>
    </div>
  );
};

export default AllJob;
