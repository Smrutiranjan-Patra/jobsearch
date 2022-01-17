import { Createcompanies } from "./components/company/Createcompanies";
import { Postjobs } from "./components/company/Postjobs";
import { Appliedjobs } from "./components/users/Appliedjobs";
import { Checkjobs } from "./components/users/Checkjobs";
import { Createaccount } from "./components/users/Createaccount";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />{" "}
        <Route path="/users/createaccount" element={<Createaccount />}>
          {" "}
        </Route>
        <Route path="/company/create" element={<Createcompanies />}>
          {" "}
        </Route>
        <Route path="/company/postjob" element={<Postjobs />}>
          {" "}
        </Route>
        <Route path="/users/checkjob" element={<Checkjobs />}>
          {" "}
        </Route>
        <Route path="/users/applied" element={<Appliedjobs />}>
          {" "}
        </Route>
        <Route element={<h3>Error</h3>}> </Route>
      </Routes>
    </div>
  );
}
