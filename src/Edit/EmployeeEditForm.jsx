import React, { useEffect, useState } from "react";
import EmployeesApi from "../api/EmployeesApi";

export default function EmployeeEditForm(props) {
  const [employee, setEmployee] = useState([]);
  const [values, setValue] = useState({
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

  useEffect(() => {
    EmployeesApi.findOneEmployees(props.id).then((data) => {
      setEmployee(data);
    });
  }, []);

  const HandleChange = (Employees) => (event) => {
    setValue({ ...values, [Employees]: event.target.value });
  };

  const onEdit = async () => {
    const payload = {
      employeeId: props.id,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      hireDate: values.hireDate,
      salary: values.salary,
      commissionPct: values.commissionPct,
      jobId: values.jobId,
      managerId: values.managerId,
      departmentId: values.departmentId,
    };
    await EmployeesApi.updateEmployees(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Updated");
    });
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Employee ID :</label>
          <input type="text" defaultValue={employee.employeeId} disabled></input>
        </div>
        <div>
          <label>First Name : </label>
          <input type="text" defaultValue={employee.firstName} onChange={HandleChange("firstName")}></input>
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" defaultValue={employee.lastName} onChange={HandleChange("lastName")}></input>
        </div>
        <div>
          <label>Email: </label>
          <input type="text" defaultValue={employee.email} onChange={HandleChange("email")}></input>
        </div>
        <div>
          <label>Phone Number: </label>
          <input type="text" defaultValue={employee.phoneNumber} onChange={HandleChange("phoneNumber")}></input>
        </div>
        <div>
          <label>Hire Date: </label>
          <input type="text" defaultValue={employee.hireDate} onChange={HandleChange("hireDate")}></input>
        </div>
        <div>
          <label>Salary: </label>
          <input type="text" defaultValue={employee.salary} onChange={HandleChange("salary")}></input>
        </div>
        <div>
          <label>Commission PCT: </label>
          <input type="text" defaultValue={employee.commissionPct} onChange={HandleChange("commissionPct")}></input>
        </div>
        <div>
          <label>Job ID: </label>
          <input type="text" defaultValue={employee.job ? employee.job.jobId : null} onChange={HandleChange("jobId")}></input>
        </div>
        <div>
          <label>Manager ID: </label>
          <input type="text" defaultValue={employee.managerId} onChange={HandleChange("managerId")}></input>
        </div>
        <div>
          <label>Department ID: </label>
          <input type="text" defaultValue={employee.department ? employee.department.departmentId : null} onChange={HandleChange("departmentId")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
