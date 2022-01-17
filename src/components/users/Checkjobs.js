import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

var user = 1;
// var userjobsapplied = []
export const Checkjobs = () => {
  const [jobs, setJobs] = useState([]);
  const handlejob = (jobid, arr) => {
    applyjob(jobid);
    addUser(jobid, arr);
  };
  const addUser = (jobid, arr) => {
    fetch(`http://localhost:3001/jobs/${jobid}`, {
      method: "PATCH",
      body: JSON.stringify({
        applied: [...arr, user]
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("done");
      });
  };
  const applyjob = (jobid) => {
    fetch(`http://localhost:3001/user/${user}`, {
      method: "PATCH",
      body: JSON.stringify({
        jobsapplied: [jobid]
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("done");
      });
  };
  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = () => {
    fetch("http://localhost:3001/jobs")
      .then((d) => d.json())
      .then((res) => {
        setJobs(res);
      });
  };

  return (
    <>
      <div>
        {jobs.map((e) => {
          return (
            <div key={e.id}>
              <h2>company-name: {e.company}</h2>
              <h2>title: {e.title}</h2>
              <h2>Salary: {e.salary}</h2>
              <h2>Location: {e.jobtype}</h2>
              <h2>Job type: {e.company}</h2>
              <h2>description: {e.description}</h2>
              <button onClick={() => handlejob(e.id, e.applied)}>Apply</button>
            </div>
          );
        })}
      </div>
      <Link to="/users/applied">
        {" "}
        <button>Check applied jobs</button>
      </Link>
    </>
  );
};
