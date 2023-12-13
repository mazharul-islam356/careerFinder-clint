// import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography
 
} from "@material-tailwind/react";

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { TableTitle } from "../../Head/Head";

const AllJob = () => {
  TableTitle('CareerFinder | All Jobs')

  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);



  // console.log(searchValue);

 const jobData = useLoaderData()
 console.log(jobData);
  


  return (
    <div className="my-6 ml-16 mt-10 w-11/12 mx-auto">
      <div className="overflow-x-auto ">

      <div className="input-group ">
               

                <input
                onChange={(e)=>{setSearchValue(e.target.value)}}
                value={searchValue}
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered lg:w-[1108px]"
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
     
              <div className="grid lg:grid-cols-2 mr-16 lg:mr-0 mb-10 gap-10 mt-10">
                
           
        {
          jobData
          .filter((item) => {
          return searchValue.toLowerCase() === ""
          ? item
          : item.category.toLowerCase().includes(searchValue);
        }).map(card=><div key={card._id} >
      
       <Card key={card._id} className="w-full max-w-[48rem] flex-row">
       <CardHeader
         shadow={false}
         floated={false}
         className="m-0 w-2/5 shrink-0 rounded-r-none"
       >
         <img
           src={card.image}
           className="h-full w-full object-cover"
         />
       </CardHeader>
       <CardBody>
         <Typography variant="h6" color="gray" className="mb-4 uppercase">
           {card.category}
         </Typography>
         <Typography variant="h4" color="blue-gray" className="mb-2">
           {card.title}
         </Typography>
         <Typography color="gray" className=" font-normal">
          <span className="font-serif font-semibold">Applicantion Date: </span> {card.applicantsD}
         </Typography>
         <Typography color="gray" className="mb-8 font-normal">
         <span className="font-serif font-semibold">Salary Range: </span> {card.salary}
         </Typography>
         <Link to={`/details/${card._id}`}>
        <button className="btn btn-outline">details</button>
        </Link>
       </CardBody>
     </Card>
      
       
   </div>)


}
 </div>

      
      </div>
    </div>
  );
};

export default AllJob;
