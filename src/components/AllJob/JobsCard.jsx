/* eslint-disable react/prop-types */

import React, { useContext, useRef } from "react";
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
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';







const JobsCard = ({job}) => {




  
  const formm = useRef();
  const authEmail = useContext(AuthContext)

  const mail = authEmail.user.email
  const namee = authEmail.user.displayName
  
 

  console.log();
  
  const handleApply = async e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value 
    const resume = form.resume.value 
    
    console.log(name,email,resume);

    const applyData = {name,email,resume}

    fetch('https://assingment-11-server-eight.vercel.app/apply',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applyData)
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log('insert apply data in mongo',data)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your apply is succecfully submited!",
            showConfirmButton: false,
            timer: 1500
          });
        })

      
// --------------send email section--------------

        emailjs.sendForm('service_74twu2o', 'template_yno6ow1', formm.current, 'f8OiDj-w70sXgI4zP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });




  }

 

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };


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
        
        
        <br />
      </CardBody>
      <CardFooter className=" mx-auto ">
        <Button onClick={handleOpen} >Apply Now</Button>


{/* -----------modal---------- */}
        
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

            <form ref={formm} onSubmit={handleApply}>

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



