import React, { useEffect, useState } from "react";
import CountriesApi from "../api/CountriesApi";

export default function CountrieEditForm(props) {
  const [countrie, setCountrie] = useState([]);
  const [values, setValue] = useState({
    countryName: undefined,
    regionId: undefined,
  });

  useEffect(() => {
    CountriesApi.findOneCountries(props.id).then((data) => {
      setCountrie(data);
    });
  }, []);

  const HandleChange = (Name) => (event) => {
    setValue({ ...values, [Name]: event.target.value });
  };

  const onEdit = async () => {
    const payload = {
      countryId: props.id,
      countryName: values.countryName,
      regionId: values.regionId,
    };
    await CountriesApi.updateCountries(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Updated");
    });
  };

  return (
    <div>
      <h2>Edit Countrie</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Countrie ID :</label>
          <input type="text" defaultValue={countrie.countryId} disabled></input>
        </div>
        <div>
          <label>Countrie Name : </label>
          <input type="text" defaultValue={countrie.countryName} onChange={HandleChange("countryName")}></input>
        </div>
        <div>
          <label>Region ID: </label>
          <input type="text" defaultValue={countrie.region ? countrie.region.regionId : "null"} onChange={HandleChange("regionId")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
