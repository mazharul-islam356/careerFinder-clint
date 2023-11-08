import { Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Authentication/AuthProvider";
import { Textarea } from "flowbite-react";
// import { AuthContext } from "../../../Authentication/AuthProvider";

const AddAjob = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleAddJob = (e) => {
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        const image = form.image.value
        const title = form.title.value
        const category = form.category.value
        const salary = form.salary.value
        const description = form.description.value
        const postingD = form.postingD.value
        const applicantsN = form.applicantsN.value
        const applicantsD = form.applicantsD.value


        const  formData = {name,image,title,category,salary,description,postingD,applicantsN,applicantsD}
        console.log(formData);

        fetch('https://assingment-11-server-eight.vercel.app/addJobs',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((res)=>res.json())
        .then((data)=>console.log('insert data in mongo',data))

    }

    const userr = useContext(AuthContext)

    const userName = userr.user
  
    console.log(userName.displayName);
    


  return (
    <div>
      <h1 className="text-3xl text-center font-serif underline font-extrabold mt-4">Add a Job</h1>
      <Card color="transparent" shadow={false}>
        

        <form onSubmit={handleAddJob}>

        <div className="lg:flex gap-10 justify-evenly">
        <div  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                User Name
              </Typography>
              <Input
              defaultValue={userName.displayName}
              name="name"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Picture URL
              </Typography>
              <Input
              name="image"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Job title
              </Typography>
              <Input
              name="title"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6"  color="blue-gray" className="-mb-3">
                Job Category
              </Typography>
              <select defaultValue={'defult'} name="category" className="select select-bordered w-96">
                <option value='defult' disabled >
                Pic a Job Category
                </option>
                <option>On Site Job</option>
                <option>Remote Job</option>
                <option>Hybrid Job</option>
                <option>Part time Job</option>
              </select>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Salary Range
              </Typography>
              <Input
              name="salary"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            
          </div>
          <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Job Description
              </Typography>
              <div className="w-96">
            <Textarea name="description" label="Message" />
          </div>

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Job Posting Date
              </Typography>

              <DatePicker
              name="postingD"
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <mask id="ipSApplication0">
            <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
              <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
              <path
                fill="#fff"
                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
              ></path>
            </g>
          </mask>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#ipSApplication0)"
          ></path>
        </svg>
      }
    />
              
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Applicants Number
              </Typography>
              <Input
              name="applicantsN"
                size="lg"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Application Deadline
              </Typography>
              <DatePicker
              name="applicantsD"
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <mask id="ipSApplication0">
            <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
              <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
              <path
                fill="#fff"
                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
              ></path>
            </g>
          </mask>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#ipSApplication0)"
          ></path>
        </svg>
      }
    />
            </div>
          </div>
         
         </div>
         <button className="ml-[600px] btn btn-wide mb-10 mt-2 btn-outline" >Add job</button>
    
        </form>
      </Card>
    </div>
  );
};

export default AddAjob;
