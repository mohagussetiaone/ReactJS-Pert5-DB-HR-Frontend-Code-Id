import React, { useEffect, useState } from "react";
import JobsApi from "../api/JobsApi";
import JobsEditForm from "../Edit/JobsEditForm";
import JobsCreateForm from "../CreateForm/JobsCreateForm";

export default function JobsViewApi() {
  const [jobs, setJobs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    JobsApi.jobsList().then((data) => {
      setJobs(data);
    });
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id) => {
    JobsApi.deleteJobs(id).then(() => {
      window.alert("Data Successfully");
      setRefresh(true);
    });
  };

  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };

  return (
    <div>
      {displayEdit ? (
        <JobsEditForm id={id} setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : display ? (
        <JobsCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Jobs</h2>
          <button onClick={() => setDisplay(true)}>Add Jobs</button>
          <table>
            <th>Jobs ID</th>
            <th>Jobs Title</th>
            <th>Min Salary</th>
            <th>Max Salary</th>
            <tbody>
              {jobs &&
                jobs.map((e) => {
                  return (
                    <tr key={e.jobId}>
                      <td>{e.jobId}</td>
                      <td>{e.jobTitle}</td>
                      <td>{e.minSalary}</td>
                      <td>{e.maxSalary}</td>
                      <td>
                        <button onClick={() => onDelete(e.jobId)}>Delete</button>
                        <button onClick={() => onClick(e.jobId)}>Edit Jobs</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
