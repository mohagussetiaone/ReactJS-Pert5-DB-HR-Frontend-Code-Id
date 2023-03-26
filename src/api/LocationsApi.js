import axios from "axios";
import config from "../config/config";

const locationList = async () => {
  try {
    const result = await axios.get(`${config.domain}/locations/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleteLocations = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/locations/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const addLocations = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/locations/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updateLocations = async (data) => {
  try {
    const result = await axios.put(`${config.domain}/locations/${data.id}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOneLocations = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/locations/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { locationList, deleteLocations, addLocations, updateLocations, findOneLocations };
