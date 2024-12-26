import axios from 'axios';

const baseUrl='http://localhost:8080/user';

export const userList=()=>axios.get(baseUrl);

export const addUser=(user)=>axios.post(baseUrl,user);

export const getUser=(id)=>axios.get(baseUrl+'/'+id);

export const updateUser=(user,id)=>axios.put(baseUrl+'/'+id,user);

export const deleteUser=(id)=>axios.delete(baseUrl+'/'+id);