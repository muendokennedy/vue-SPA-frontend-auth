import { Axios } from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8000",
  timeout: 60000,
  withCredentials: true,
  headers: {
    Accept: "application/json"
  }
})

axios.interceptors.response.use(null, (err) => {

  const error = {
    status: err.response?.status,
    original: err,
    validation: {},
    message: null
  };

  if(err.response?.status === 422){
    for(let field in err.response.data.errors){
      error.validation[field] = err.response.data.errors[field][0]
    }
  } else {
    error.message = 'Something went wrong. Please try again'
  }

  return Promise.reject(error)
})

export default axios