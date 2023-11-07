import {
    Card,
    CardHeader,
    CardBody,
    Typography
   
  } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

    const MyJobs = () => {
    const myJobData = useLoaderData()

    const  [jobs,setJob] = useState(myJobData)

    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5001/addJobs/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        
          if(data.deletedCount>0){
            alert('deleted succecfully')
            const remaining = jobs.filter(job=>job._id !== _id)
            setJob(remaining)

            console.log(remaining);
          }
        
      
        
        })
        
    }

  


    return (
        <div className="grid grid-cols-2 mb-10 gap-10 mt-10">
           {
            jobs.map(data=><Card key={data._id} className="w-full max-w-[48rem] flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={data.image}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                {data.category}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {data.title}
              </Typography>
              <Typography color="gray" className=" font-normal">
               <span className="font-serif font-semibold">Applicantion Date: </span> {data.applicantsD}
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
              <span className="font-serif font-semibold">Salary Range: </span> {data.salary}
              </Typography>
              <Link to='/update'><button className="btn mr-4 btn-outline btn-accent btn-sm">Update</button></Link>
              <button onClick={()=>handleDelete(data._id)} className="btn btn-error btn-outline btn-sm">Delete</button>
            </CardBody>
          </Card>)
           }
            
        </div>
    );
};

export default MyJobs;