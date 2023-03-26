import React, { useEffect, useState } from "react";
import CountriesApi from "../api/CountriesApi";
import CountrieEditForm from "../Edit/CountrieEditForm";
import CountriesCreateForm from "../CreateForm/CountriesCreateForm";

export default function CountriesViewApi() {
  const [countrie, setCountrie] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    CountriesApi.countrieList().then((data) => {
      setCountrie(data);
    });
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id) => {
    CountriesApi.deleteCountrie(id).then(() => {
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
        <CountrieEditForm id={id} setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : display ? (
        <CountriesCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Countries</h2>
          <button onClick={() => setDisplay(true)}>Add Countrie</button>
          <table>
            <th>Countrie ID</th>
            <th>Countrie Name</th>
            <th>Region Name</th>
            <th>Action</th>
            <tbody>
              {countrie &&
                countrie.map((e) => {
                  return (
                    <tr key={e.countryId}>
                      <td>{e.countryId}</td>
                      <td>{e.countryName}</td>
                      <td>{e.region ? e.region.regionName : null}</td>
                      <td>
                        <button onClick={() => onDelete(e.countryId)}>Delete</button>
                        <button onClick={() => onClick(e.countryId)}>Edit Countrie</button>
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
