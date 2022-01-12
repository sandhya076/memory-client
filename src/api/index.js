import axios from "axios" ;


const url = "http://localhost:5000/memories";

export const fetchMemorie = () => axios.get(url);
export const createMemorie = (newMemorie) => axios.post(url,newMemorie);
export const updateMemorie = (id,updateMemorie) => axios.patch(`${url}${id}`,updateMemorie);
export const deleteMemorie = (id) => axios.delete(`${url}/${id}`);