import { useState } from "react";

const AllJob = () => {

    


  fetch("http://localhost:5001/addJobs")
    .then((res) => res.json())
    .then((data) => console.log(data));



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
            {/* row 1 */}
            <tr>
              
              <td>
                <div className="flex items-center space-x-3">
                  
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                
              </td>
              <td>job posting</td>
              <td>applicant deadline</td>
              <td>salary</td>
              
               <th>
               <button className="btn btn-outline">details</button>
               </th>
             
            </tr>
            {/* row 2 */}
            <tr>
              
              <td>
                <div className="flex items-center space-x-3">
                  
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                
              </td>
              <td>job posting</td>
              <td>applicant deadline</td>
              <td>salary</td>
              
              <th>
               <button className="btn btn-outline">details</button>
               </th>
              
            </tr>
            {/* row 3 */}
            <tr>
              
              <td>
                <div className="flex items-center space-x-3">
                  
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                
              </td>
              <td>job posting</td>
              <td>applicant deadline</td>
              <td>salary</td>
            
              <th>
               <button className="btn btn-outline">details</button>
               </th>
             
            </tr>
            {/* row 4 */}
            <tr>
              
              <td>
                <div className="flex items-center space-x-3">
                  
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                
              </td>
              <td>job posting</td>
              <td>applicant deadline</td>
              <td>salary</td>
              
              <th>
               <button className="btn btn-outline">details</button>
               </th>
             
            </tr>
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
