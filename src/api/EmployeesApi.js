import axios from "axios";
import config from "../config/config";

const employeeList = async () => {
  try {
    const result = await axios.get(`${config.domain}/employees/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleteEmployee = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/employees/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};
const addEmployees = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/employees/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updateEmployees = async (data) => {
  try {
    const result = await axios.put(`${config.domain}/employees/${data.employeeId}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};
const findOneEmployees = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/employees/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { employeeList, deleteEmployee, addEmployees, updateEmployees, findOneEmployees };
