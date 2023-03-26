import React, { useEffect, useState } from "react";
import RegionApi from "../api/RegionApi";
import RegionEditForm from "../Edit/RegionEditForm";
import RegionCreateForm from "../CreateForm/RegionCreateForm";

export default function RegionViewApi() {
  const [region, setRegion] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(
    (e) => {
      RegionApi.regionList().then((data) => {
        setRegion(data);
      });
      setRefresh(false);
    },
    [refresh]
  );

  const onDelete = async (id) => {
    RegionApi.deleteRegion(id).then(() => {
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
        <RegionEditForm id={id} setRefresh={setRefresh} />
      ) : display ? (
        <RegionCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Region</h2>
          <button onClick={() => setDisplay(true)}>Add region</button>
          <table>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Action</th>
            <tbody>
              {region &&
                region.map((e) => {
                  return (
                    <tr key={e.regionId}>
                      <td>{e.regionId}</td>
                      <td>{e.regionName}</td>
                      <td>
                        <button onClick={() => onDelete(e.regionId)}>Delete</button>
                        <button onClick={() => onClick(e.regionId)}>Edit Region</button>
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
