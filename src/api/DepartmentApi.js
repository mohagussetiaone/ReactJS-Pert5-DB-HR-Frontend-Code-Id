import axios from "axios";
import config from "../config/config";

const departmentList = async () => {
  try {
    const result = await axios.get(`${config.domain}/departments/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleteDepartment = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/departments/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const addDepartment = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/departments/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updateDepartment = async (data) => {
  try {
    const result = await axios.put(`${config.domain}/departments/${data.departmentId}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOneDepartment = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/departments/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};
export default { departmentList, deleteDepartment, addDepartment, updateDepartment, findOneDepartment };
