import axios from "axios";
import config from "../config/config";

const countrieList = async () => {
  try {
    const result = await axios.get(`${config.domain}/countries/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleteCountrie = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/countries/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const addCountries = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/countries/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updateCountries = async (data) => {
  try {
    const result = await axios.put(`${config.domain}/countries/${data.countryId}`, data);
    console.log(result);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOneCountries = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/countries/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { countrieList, deleteCountrie, addCountries, updateCountries, findOneCountries };
