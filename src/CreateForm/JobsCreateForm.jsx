import React, { useState } from "react";
import JobsApi from "../api/JobsApi";

export default function JobsCreateForm(props) {
  const [value, setValue] = useState({
    jobId: undefined,
    jobTitle: undefined,
    minSalary: undefined,
    maxSalary: undefined,
  });
  const HandleChange = (jobId, jobTitle, minSalary, maxSalary) => (event) => {
    setValue({
      ...value,
      [jobId]: event.target.value,
      [jobTitle]: event.target.value,
      [minSalary]: event.target.value,
      [maxSalary]: event.target.value,
    });
  };
  const onSubmit = async () => {
    const payload = {
      jobId: value.jobId,
      jobTitle: value.jobTitle,
      minSalary: value.minSalary,
      maxSalary: value.maxSalary,
    };
    await JobsApi.addJobs(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Jobs</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Job ID : </label>
          <input type="text" placeholder="Jobs Id" onChange={HandleChange("jobId")}></input>
        </div>
        <div>
          <label>Job Title : </label>
          <input type="text" placeholder="Job Title" onChange={HandleChange("jobTitle")}></input>
        </div>
        <div>
          <label>Min Salary: </label>
          <input type="text" placeholder="Min Salary" onChange={HandleChange("minSalary")}></input>
        </div>
        <div>
          <label>Max Salary: </label>
          <input type="text" placeholder="Max Salary" onChange={HandleChange("maxSalary")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
