import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-180c1.cloudfunctions.net/api',
});

export default instance;
// http://localhost:5001/clone-180c1/us-central1/api localhost firebase
// https://us-central1-clone-180c1.cloudfunctions.net/api
