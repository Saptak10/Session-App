import axios from 'axios';

const SessionUrl = 'http://localhost:5000/';

export const postSession = async (session) => {
    console.log(session);
    return await axios.post(`${SessionUrl}`, {session})
      .then((res) => res.data);
}

export const getSession = async (session) => {
  console.log(session);
  return await axios.get(`${SessionUrl}`)
    .then((res) => res.data);
}