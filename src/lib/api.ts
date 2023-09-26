import Axios from 'axios'

const api = Axios.create({
  baseURL: process.env.RAPID_API_URL,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST
  }
})

export { api }
