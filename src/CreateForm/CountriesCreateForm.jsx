import React, { useState } from "react";
import CountriesApi from "../api/CountriesApi";

export default function CountriesCreateForm(props) {
  const [value, setValue] = useState({
    countryId: undefined,
    countryName: undefined,
    regionId: undefined,
  });
  const HandleChange = (countrys) => (event) => {
    setValue({ ...value, [countrys]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      countryId: value.countryId,
      countryName: value.countryName,
      regionId: value.regionId,
    };
    await CountriesApi.addCountries(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Countries</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Countries ID : </label>
          <input type="text" placeholder="Countries ID" onChange={HandleChange("countryId")}></input>
        </div>
        <div>
          <label>Countries Name : </label>
          <input type="text" placeholder="Countries Name" onChange={HandleChange("countryName")}></input>
        </div>
        <div>
          <label>Region Id : </label>
          <input type="text" placeholder="Region Id" onChange={HandleChange("regionId")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
