import React, { useState } from "react";
import DepartmentApi from "../api/DepartmentApi";

export default function DepartmentCreateForm(props) {
  const [value, setValue] = useState({
    departmentName: undefined,
    managerId: undefined,
    locationId: undefined,
  });
  const HandleChange = (Departments) => (event) => {
    setValue({ ...value, [Departments]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      departmentId: value.departmentId,
      departmentName: value.departmentName,
      managerId: value.managerId,
      locationId: value.locationId,
    };
    console.log(payload);
    await DepartmentApi.addDepartment(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Department</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Department Name : </label>
          <input type="text" placeholder="Department Name" onChange={HandleChange("departmentName")}></input>
        </div>
        <div>
          <label>Manager ID : </label>
          <input type="text" placeholder="Manager Id" onChange={HandleChange("managerId")}></input>
        </div>
        <div>
          <label>Location ID: </label>
          <input type="text" placeholder="Location Id" onChange={HandleChange("locationId")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
