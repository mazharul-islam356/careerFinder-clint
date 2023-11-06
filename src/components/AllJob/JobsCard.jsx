/* eslint-disable react/prop-types */

import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  Dialog,
  Input,
  Checkbox,
  } from "@material-tailwind/react";

const JobsCard = ({job}) => {


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
            <Typography className="-mb-2" variant="h6">
              User Name
            </Typography>
            <Input label="Your Name" size="lg" />
            <Typography className="-mb-2" variant="h6">
              User Email
            </Typography>
            <Input label="Your Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
               Resume Link
            </Typography>
            <Input label="Your Resume" size="lg" />
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
            Submit Apply
            </Button>
            
          </CardFooter>
        </Card>
      </Dialog>
      </CardFooter>
    </Card>


            
        </div>
            
        </div>
    );
};

export default JobsCard;



