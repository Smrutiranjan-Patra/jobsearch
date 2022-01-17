import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../features/companies/actions";

export const Createcompanies = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(form));
  };
  const dispatch = useDispatch();

  return (
    <>
      <h1> Add companies</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="name" placeholder="Company name" />
        <br />

        <Link to="..//company/postjob">
          <input type="submit" />
        </Link>
        <br />
      </form>
    </>
  );
};
