import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <h1>
        Welcome To Job Portal
      </h1>

      <div id="navi">
        <Link to="/users/createaccount">
          <button> Get Job</button>
        </Link>
        <Link to="/company/create">
          <button> Post Jobs</button>
        </Link>
      </div>
    </>
  );
};
