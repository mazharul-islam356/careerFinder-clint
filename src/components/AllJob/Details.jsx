import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import JobsCard from "./JobsCard"

const Details = () => {
  const [joB, setJob] = useState([]);

  const { id } = useParams();
  // console.log(param);
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const findJobs = data.find((job) => job._id === id);
    setJob(findJobs);
    console.log(findJobs);
  }, [data,id]);

  

  return (
    <div>

     <JobsCard job={joB}></JobsCard>

    </div>
  );
};

export default Details;
