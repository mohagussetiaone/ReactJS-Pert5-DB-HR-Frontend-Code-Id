import React, { useEffect, useState } from "react";
import DepartmentApi from "../api/DepartmentApi";

export default function DepartmentEditForm(props) {
  const [department, setDepartment] = useState([]);
  const [values, setValue] = useState({
    departmentId: undefined,
    departmentName: undefined,
    managerId: undefined,
    locationId: undefined,
  });

  useEffect(() => {
    DepartmentApi.findOneDepartment(props.id).then((data) => {
      setDepartment(data);
    });
  }, []);

  const HandleChange = (Departments) => (event) => {
    setValue({ ...values, [Departments]: event.target.value });
  };

  const onEdit = async () => {
    const payload = {
      departmentId: props.id,
      departmentName: values.departmentName,
      managerId: values.managerId,
      locationId: values.locationId,
    };
    console.log(payload);
    await DepartmentApi.updateDepartment(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Updated");
    });
  };

  return (
    <div>
      <h2>Edit Department</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Department ID :</label>
          <input type="text" defaultValue={department.departmentId} disabled></input>
        </div>
        <div>
          <label>Department Name : </label>
          <input type="text" defaultValue={department.departmentName} onChange={HandleChange("departmentName")}></input>
        </div>
        <div>
          <label>Manager ID: </label>
          <input type="text" defaultValue={department.manager ? department.manager.locationId : null} onChange={HandleChange("managerId")}></input>
        </div>
        <div>
          <label>Location Id: </label>
          <input type="text" defaultValue={department.location ? department.location.locationId : null} onChange={HandleChange("locationId")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
