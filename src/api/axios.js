import axios from "axios";

export default axios.create({
  //so prevent retyping this everytime & backend (NODE) is running on port 3500
  baseURL: 'http://localhost:3500'
})