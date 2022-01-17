import { useState } from "react";

export const Postjobs = () => {
  const [form, setForm] = useState({
    company: "",
    companyid: "",
    title: "",
    salary: 0,
    description: "",
    location: "",
    jobtype: "",
    applied: []
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/jobs", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json"
      }
    }).then((res) => {
      console.log("done");
    });
  };

  return (
    <>
      <h1>Post jobs</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="company"
          placeholder="Company name"
        />
        <br />
        <input
          onChange={handleChange}
          name="companyid"
          placeholder="Company Id"
        />
        <br />
        <input onChange={handleChange} name="title" placeholder="title" />
        <br />

        <input onChange={handleChange} name="salary" placeholder="salary" />
        <br />
        <input
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <br />
        <input onChange={handleChange} name="location" placeholder="location" />
        <br />
        <input onChange={handleChange} name="jobtype" placeholder="jobtype" />
        <br />

        <input type="submit" />
        <br />
      </form>
    </>
  );
};
