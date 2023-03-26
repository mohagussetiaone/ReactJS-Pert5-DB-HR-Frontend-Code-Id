import React, { useEffect, useState } from "react";
import RegionApi from "../api/RegionApi";

export default function RegionEditForm(props) {
  const [region, setRegion] = useState([]);
  const [values, setValue] = useState({
    id: undefined,
    regionName: undefined,
  });

  useEffect(() => {
    RegionApi.findOneRegion(props.id).then((data) => {
      setRegion(data);
    });
  }, []);

  const HandleChange = (regionName) => (event) => {
    setValue({ ...values, [regionName]: event.target.value });
  };

  const onEdit = async () => {
    const payload = {
      id: props.id,
      regionName: values.regionName,
    };
    await RegionApi.updateRegion(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Updated");
    });
  };

  return (
    <div>
      <h2>Edit Region</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Region ID :</label>
          <input type="text" defaultValue={region.regionId} disabled></input>
        </div>
        <div>
          <label>Region Name : </label>
          <input type="text" defaultValue={region.regionName} onChange={HandleChange("regionName")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
