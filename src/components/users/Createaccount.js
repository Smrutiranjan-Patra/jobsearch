import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../features/users/actions";

export const Createaccount = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      jobsapplied: []
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(form));
  };
  const dispatch = useDispatch();

  return (
    <>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="name" placeholder="name" />
        <br />

        <input
          onChange={handleChange}
          name="password"
          placeholder="enter password"
        />
        <br />
        <Link to="/users/checkjob">
          {" "}
          <input type="submit" />
        </Link>
        <br />
      </form>
    </>
  );
};
