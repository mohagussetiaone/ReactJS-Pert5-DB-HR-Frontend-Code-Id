import React, { useState } from "react";
import RegionApi from "../api/RegionApi";

export default function RegionCreateForm(props) {
  const [value, setValue] = useState({
    regionName: undefined,
  });
  const HandleChange = (regionName) => (event) => {
    setValue({ ...value, [regionName]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      regionName: value.regionName,
    };
    await RegionApi.addRegion(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Region</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Region Name : </label>
          <input type="text" placeholder="Region Name" onChange={HandleChange("regionName")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
