import React, { useEffect, useState } from "react";
import EmployeesApi from "../api/EmployeesApi";
import EmployeeEditForm from "../Edit/EmployeeEditForm";
import EmployeeCreateForm from "../CreateForm/EmployeeCreateForm";

export default function EmployeeViewApi() {
  const [employee, setEmployee] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    EmployeesApi.employeeList().then((data) => {
      setEmployee(data);
    });
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id) => {
    EmployeesApi.deleteEmployee(id).then(() => {
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
        <EmployeeEditForm id={id} setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : display ? (
        <EmployeeCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Employee</h2>
          <button onClick={() => setDisplay(true)}>Add Employee</button>
          <table>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Hire Date</th>
            <th>Salary</th>
            <th>Commission PCT</th>
            <th>Job ID</th>
            <th>Manager ID</th>
            <th>Department ID</th>
            <tbody>
              {employee &&
                employee.map((e) => {
                  return (
                    <tr key={e.employeeId}>
                      <td>{e.employeeId}</td>
                      <td>{e.firstName}</td>
                      <td>{e.lastName}</td>
                      <td>{e.email}</td>
                      <td>{e.phoneNumber}</td>
                      <td>{e.hireDate}</td>
                      <td>{e.salary}</td>
                      <td>{e.commissionPct ? e.commissionPct : "null"}</td>
                      <td>{e.job ? e.job.jobId : "null"}</td>
                      <td>{e.managerId ? e.managerId : "null"}</td>
                      <td>{e.department ? e.department.departmentId : "null"}</td>
                      <td>
                        <button onClick={() => onDelete(e.employeeId)}>delete</button>
                        <button onClick={() => onClick(e.employeeId)}>Edit Employee</button>
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
