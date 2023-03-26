import React, { useEffect, useState } from "react";
import DepartmentApi from "../api/DepartmentApi";
import DepartmentEditForm from "../Edit/DepartmentEditForm";
import DepartmentCreateForm from "../CreateForm/DepartmentCreateForm";

export default function DepartmentViewApi() {
  const [department, setDepartment] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    DepartmentApi.departmentList().then((data) => {
      setDepartment(data);
    });
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id) => {
    DepartmentApi.deleteDepartment(id).then(() => {
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
        <DepartmentEditForm id={id} setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : display ? (
        <DepartmentCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Department</h2>
          <button onClick={() => setDisplay(true)}>Add Department</button>
          <table>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Manager ID</th>
            <th>Location ID</th>
            <th>Action</th>
            <tbody>
              {department &&
                department.map((e) => {
                  return (
                    <tr key={e.departmentId}>
                      <td>{e.departmentId}</td>
                      <td>{e.departmentName}</td>
                      <td>{e.manager ? e.manager.locationId : "null"}</td>
                      <td>{e.location ? e.location.locationId : "null"}</td>
                      <td>
                        <button onClick={() => onDelete(e.departmentId)}>Delete</button>
                        <button onClick={() => onClick(e.departmentId)}>Edit Department</button>
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
