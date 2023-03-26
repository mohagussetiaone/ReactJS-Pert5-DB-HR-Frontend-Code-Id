import React, { useEffect, useState } from "react";
import LocationsApi from "../api/LocationsApi";

export default function LocationEditForm(props) {
  const [location, setLocation] = useState([]);
  const [values, setValue] = useState({
    streetAddress: undefined,
    postalCode: undefined,
    city: undefined,
    stateProvince: undefined,
    countryId: undefined,
  });

  useEffect(() => {
    LocationsApi.findOneLocations(props.id).then((data) => {
      setLocation(data);
    });
  }, []);

  const HandleChange = (streetAddress, postalCode, city, stateProvince, countryId) => (event) => {
    setValue({
      ...location,
      [streetAddress]: event.target.value,
      [postalCode]: event.target.value,
      [city]: event.target.value,
      [stateProvince]: event.target.value,
      [countryId]: event.target.value,
    });
  };

  const onEdit = async () => {
    const payload = {
      locationId: props.locationId,
      streetAddress: values.streetAddress,
      postalCode: values.postalCode,
      city: values.city,
      stateProvince: values.stateProvince,
      countryId: values.countryId,
    };
    await LocationsApi.updateLocations(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Updated");
    });
  };

  return (
    <div>
      <h2>Edit Locations</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Location ID :</label>
          <input type="text" defaultValue={location.locationId} disabled></input>
        </div>
        <div>
          <label>Street Address : </label>
          <input type="text" defaultValue={location.jobTitle} onChange={HandleChange("streetAddress")}></input>
        </div>
        <div>
          <label>Postal Code: </label>
          <input type="text" defaultValue={location.minSalary} onChange={HandleChange("postalCode")}></input>
        </div>
        <div>
          <label>City: </label>
          <input type="text" defaultValue={location.maxSalary} onChange={HandleChange("city")}></input>
        </div>
        <div>
          <label>State Province: </label>
          <input type="text" defaultValue={location.maxSalary} onChange={HandleChange("stateProvince")}></input>
        </div>
        <div>
          <label>Country ID: </label>
          <input type="text" defaultValue={location.maxSalary} onChange={HandleChange("countryId")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
