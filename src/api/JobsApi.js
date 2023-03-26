import axios from "axios";
import config from "../config/config";

const jobsList = async () => {
  try {
    const result = await axios.get(`${config.domain}/jobs/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleteJobs = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/jobs/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};
const addJobs = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/jobs/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updateJobs = async (data) => {
  try {
    const result = await axios.put(`${config.domain}/jobs/${data.jobId}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOneJobs = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/jobs/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { jobsList, deleteJobs, addJobs, updateJobs, findOneJobs };
