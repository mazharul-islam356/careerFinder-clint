import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { TableTitle } from "../../../Head/Head";

const MyJobs = () => {
  TableTitle("CareerFinder | My Jobs");
  const myJobData = useLoaderData();

  const [jobs, setJob] = useState(myJobData);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assingment-11-server-eight.vercel.app/addJobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = jobs.filter((job) => job._id !== _id);
              setJob(remaining);
              console.log(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image & Name</th>
            <th>Cetagory</th>
            <th>Application Date</th>
            <th>Application Deadline</th>
            <th>Posting Date</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>

        {jobs.map((job) => (
          <tbody key={job._id}>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-circle btn-outline"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={job.image} />
                    </div>
                  </div>

                  <div>
                    <div className="font-bold">{job.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {job.category}
                <br />
              </td>
              <td>{job.applicantsN}</td>
              <td>{job.applicantsD}</td>
              <td>{job.postingD}</td>
              <td>{job.salary}</td>
              <th>
                <Link to={`/update/${job._id}`}>
                  <button className="btn mr-4 btn-outline btn-accent btn-sm">
                    Update
                  </button>
                </Link>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyJobs;
