/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  Dialog,
  Input,
  } from "@material-tailwind/react";
import { AuthContext } from "../../Authentication/AuthProvider";

const JobsCard = ({job}) => {

  const authEmail = useContext(AuthContext)
  console.log(authEmail);

  const mail = authEmail.user.email
  const namee = authEmail.user.displayName
  // console.log(mail);
  
  // const {email,displayName} = applyEmail_name
 



  console.log();
  
  const handleApply = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value 
    const resume = form.resume.value 
    console.log(name,email,resume);

    const applyData = {name,email,resume}

   

    fetch('http://localhost:5001/apply',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applyData)
        })
        .then((res)=>res.json())
        .then((data)=>console.log('insert apply data in mongo',data))




  }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);




  
      const {image,title,salary,description,applicantsN} = job
    return (
        <div>

<div>
            <Card className="mt-10 w-96 mb-10">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
        className="w-full h-full"
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
           {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
        <Typography>
           <span className="font-semibold">Salary :</span> {salary}
        </Typography>
        <Typography>
        <span className="font-semibold">Number of Applicants :</span> {applicantsN}
        </Typography>
      </CardBody>
      <CardFooter className=" mx-auto ">
        <Button onClick={handleOpen} >Apply Now</Button>
        <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
            Submit application 
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your Name,email and resume link to Submit apply.
            </Typography>

            <form onSubmit={handleApply}>

            <Typography className="mb-2" variant="h6">
              User Name
            </Typography>
            <Input label='Your Name' defaultValue={namee} name="name" size="lg" />
            <Typography className="mb-2" variant="h6">
              User Email
            </Typography>
            <Input label='Your Email' defaultValue={mail} name="email" size="lg" />
            <Typography className="mb-2" variant="h6">
               Resume Link
            </Typography>
            <Input label="Your Resume" name="resume" size="lg" />
            
          <CardFooter className="pt-0">
            <button className="btn btn-outline btn-sm mt-4 ml-20" onClick={handleOpen}>Submit Apply</button>
            
          </CardFooter>


            </form>
          </CardBody>
        </Card>
      </Dialog>
      </CardFooter>
    </Card>


            
        </div>
            
        </div>
    );
};

export default JobsCard;



