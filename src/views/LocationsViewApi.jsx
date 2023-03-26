import React, { useEffect, useState } from "react";
import LocationsApi from "../api/LocationsApi";
import LocationEditForm from "../Edit/LocationEditForm";
import LocationsCreateForm from "../CreateForm/LocationsCreateForm";

export default function LocationsViewApi() {
  const [locations, setLocations] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    LocationsApi.locationList().then((data) => {
      setLocations(data);
    });
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id) => {
    LocationsApi.deleteLocations(id).then(() => {
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
        <LocationEditForm id={id} setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : display ? (
        <LocationsCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Locations</h2>
          <button onClick={() => setDisplay(true)}>Add Locations</button>
          <table>
            <th>Locations ID</th>
            <th>Street Address</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>State Province</th>
            <th>Country ID</th>
            <tbody>
              {locations &&
                locations.map((e) => {
                  return (
                    <tr key={e.locationId}>
                      <td>{e.locationId}</td>
                      <td>{e.streetAddress}</td>
                      <td>{e.postalCode}</td>
                      <td>{e.city}</td>
                      <td>{e.stateProvince ? e.stateProvince : "null"}</td>
                      <td>{e.country ? e.country.countryId : "null"}</td>
                      <td>
                        <button onClick={() => onDelete(e.locationId)}>Delete</button>
                        <button onClick={() => onClick(e.locationId)}>Edit Locations</button>
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
