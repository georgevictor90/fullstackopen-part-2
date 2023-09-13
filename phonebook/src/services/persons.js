import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
const getPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const removeEntry = (id) => {
  const url = `${baseUrl}/${id}`;
  const request = axios.delete(url);
  return request.then((response) => response.data);
};

const edit = (id, number) => {
  const url = `${baseUrl}/${id}`;
  const request = axios.patch(url, { number: number });
  return request.then((response) => response.data);
};

export default { getPersons, create, removeEntry, edit };
