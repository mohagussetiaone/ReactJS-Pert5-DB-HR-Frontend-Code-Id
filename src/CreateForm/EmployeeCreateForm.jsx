import React, { useState } from "react";
import EmployeesApi from "../api/EmployeesApi";

export default function EmployeeCreateForm(props) {
  const [value, setValue] = useState({
    employeeId: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phoneNumber: undefined,
    hireDate: undefined,
    salary: undefined,
    commissionPct: undefined,
    jobId: undefined,
    managerId: undefined,
    departmentId: undefined,
  });
  const HandleChange = (Employees) => (event) => {
    setValue({ ...value, [Employees]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      employeeId: value.employeeId,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phoneNumber: value.phoneNumber,
      hireDate: value.hireDate,
      salary: value.salary,
      commissionPct: value.commissionPct,
      jobId: value.jobId,
      managerId: value.managerId,
      departmentId: value.departmentId,
    };
    console.log(payload);
    await EmployeesApi.addEmployees(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Employees</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name : </label>
          <input type="text" placeholder="First Name" onChange={HandleChange("firstName")}></input>
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" placeholder="Last Name" onChange={HandleChange("lastName")}></input>
        </div>
        <div>
          <label>Email : </label>
          <input type="text" placeholder="Email" onChange={HandleChange("email")}></input>
        </div>
        <div>
          <label>Phone Number : </label>
          <input type="text" placeholder="Phone Number" onChange={HandleChange("phoneNumber")}></input>
        </div>
        <div>
          <label>Hire Date : </label>
          <input type="text" placeholder="Hire Date" onChange={HandleChange("hireDate")}></input>
        </div>
        <div>
          <label>Salary: </label>
          <input type="text" placeholder="Salary" onChange={HandleChange("salary")}></input>
        </div>
        <div>
          <label>Commission PCT : </label>
          <input type="text" placeholder="Commission Pct" onChange={HandleChange("commissionPct")}></input>
        </div>
        <div>
          <label>Job Id : </label>
          <input type="text" placeholder="Job Id" onChange={HandleChange("jobId")}></input>
        </div>
        <div>
          <label>Manager Id : </label>
          <input type="text" placeholder="Manager Id" onChange={HandleChange("managerId")}></input>
        </div>
        <div>
          <label>Department Id : </label>
          <input type="text" placeholder="Department Id" onChange={HandleChange("departmentId")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
