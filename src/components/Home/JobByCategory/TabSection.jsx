
// import { useEffect, useState } from "react";
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, TabList, Tabs } from "react-tabs";
import { AuthContext } from "../../../Authentication/AuthProvider";
import toast from "react-hot-toast";

const TabSection = () => {

  const loginAlert = useContext(AuthContext);
  console.log(loginAlert);


  
  const tabData = useLoaderData()
  // console.log(tabData)

  const [allJobs,setAllJobs] = useState(tabData)
  console.log(allJobs);

  const handlefilterJob = (catchJob) => {
    const updatedJob = tabData.filter((currentJob)=>{
      return currentJob.category === catchJob
    })
    setAllJobs(updatedJob)
  }
 
    
  return (
    <Tabs>

    <h1 className="text-center border-2 border-dashed border-gray-400 p-2  rounded-lg font-sans text-xl font-semibold mt-20">JOBS CATAGORY</h1>

      <TabList className="menu-tab lg:flex lg:justify-around lg:ml-0 ml-4 lg:space-x-0 space-y-4 lg:space-y-0 space-x-4 mt-10">

        <Tab className="btn btn-outline btn-sm" onClick={()=>setAllJobs(tabData)}>All Jobs</Tab>

        <Tab className="btn btn-outline btn-sm" onClick={()=>handlefilterJob('On Site Job')}>On Site Job</Tab>

        <Tab className="btn btn-outline btn-sm" onClick={()=>handlefilterJob('Remote Job')}>Remote Job</Tab>

        <Tab className="btn btn-outline btn-sm" onClick={()=>handlefilterJob('Hybrid Job')}>Hybrid Job</Tab>

        <Tab className="btn btn-outline btn-sm" onClick={()=>handlefilterJob('Part time Job')}>Part time Job</Tab>

      </TabList>


      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center justify-items-center gap-6 mb-4 mt-5">
        {
          allJobs.map(job=>{
            const {_id,name,title,image,postingD,salary,applicantsN} = job
            const handleViewDetailsClick = () => {
              if (!loginAlert.user) {        
                toast.error('You have to log in first to view details.');
                history.push('/login');
                return;
              }
              history.push(`/details/${_id}`);
            };
          
            return(
              <div key={_id} className="card lg:w-96 w-72 mb-4 bg-base-100 shadow-xl">
          <div className="card-body">
            <img className="rounded-lg shadow-lg mb-2" src={image} alt="" />
            <h2 className="card-title">{name}</h2>
            <p> <span className="font-serif font-bold">Job title: </span> {title}</p>
            <p><span className="font-serif font-bold">Posting Date: </span>{postingD}</p>
            <p><span className="font-serif font-bold">Salary: </span>{salary}</p>
            <p><span className="font-serif font-bold">Applicants Number: </span>{applicantsN}</p>
            <div className="card-actions justify-center mt-2">
            <Link to={`/details/${_id}`}>
                 <button onClick={handleViewDetailsClick} className="btn btn-outline">View Details</button>
                 </Link>
            </div>
          </div>
        </div>
            ) 
          }
            )
        }
      </div>










    </Tabs>
  );
};

export default TabSection;
