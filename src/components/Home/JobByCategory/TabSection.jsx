
// import { useEffect, useState } from "react";
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, TabList, Tabs } from "react-tabs";
import { AuthContext } from "../../../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { MdAlignHorizontalLeft } from "react-icons/md";


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

        <div className="uppercase font- border p-3 rounded-lg cursor-pointer hover:bg-[#386c74] transition-all hover:text-white font-popins">
        <Tab className="flex gap-1 items-center" onClick={()=>setAllJobs(tabData)}>
        <MdAlignHorizontalLeft className="text-xl" />
          All Jobs
        </Tab>
        </div>

        <Tab className="btn btn-outline btn-sm font-popins" onClick={()=>handlefilterJob('On Site Job')}>On Site Job</Tab>

        <Tab className="btn btn-outline btn-sm font-popins" onClick={()=>handlefilterJob('Remote Job')}>Remote Job</Tab>

        <Tab className="btn btn-outline btn-sm font-popins" onClick={()=>handlefilterJob('Hybrid Job')}>Hybrid Job</Tab>

        <Tab className="btn btn-outline btn-sm font-popins" onClick={()=>handlefilterJob('Part time Job')}>Part time Job</Tab>

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
              <div key={_id} className="card lg:w-96 h-[30rem] w-72 mb-4 bg-base-100 hover:shadow-xl transition-all border">
          <div className="card-body">
            <img className="rounded-lg shadow-lg mb-2 h-40" src={image} alt="" />
            <h2 className="card-title font-popins w-100 py-2 text-gray-600 text-2xl mx-auto">-{name}-</h2>
            <p> <span className="font-popins font-bold">Job title: </span> {title}</p>
            <p><span className="font-popins font-bold">Posting Date: </span>{postingD}</p>
            <p><span className="font-popins font-bold">Salary: </span>{salary}</p>
            <p><span className="font-popins font-bold">Applicants Number: </span>{applicantsN}</p>
            <div className="card-actions justify-center mt-2">
            <Link to={`/details/${_id}`}>
                 <button onClick={handleViewDetailsClick} className="btn text-white font-popins btn-accent btn-sm btn-wide">View Details</button>
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
