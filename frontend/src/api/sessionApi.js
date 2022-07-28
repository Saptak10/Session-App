import axios from 'axios';

const SessionUrl = 'http://localhost:5000/addSession';

export const sessionForm = async (session) => {
    console.log(session);
    return await axios.post(`${SessionUrl}/`, {session})
      .then((res) => res.data);
}