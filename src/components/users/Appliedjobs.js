import { useState, useEffect } from "react";

var user = 1;
// var userjobsapplied = []
export const Appliedjobs = () => {
  const [jobIds, setJobsIds] = useState([]);
  const [jobs, setJobs] = useState([]);

  const getapplyjobIds = () => {
    fetch("http://localhost:3001/user/1/")
      .then((d) => d.json())
      .then((res) => {
        setJobsIds(res.jobsapplied);
        getJobs();
      });
  };

  const getJobs = () => {
    jobIds.forEach((e) => {
      fetch(`http://localhost:3001/jobs/${e}`)
        .then((d) => d.json())
        .then((res) => {
          setJobs([...jobs, res]);
        });
    });
  };

  useEffect(() => {
    getapplyjobIds();
    getJobs();
  }, []);

  return (
    <div>
      <h1>Jobs applied</h1>

      {jobs.map((e) => {
        return (
          <div key={e.id}>
            <h2>company-name: {e.company}</h2>
            <h2>title: {e.title}</h2>
            <h2>Salary: {e.salary}</h2>
            <h2>Location: {e.jobtype}</h2>
            <h2>Job type: {e.company}</h2>
            <h2>description: {e.description}</h2>
          </div>
        );
      })}
    </div>
  );
};
