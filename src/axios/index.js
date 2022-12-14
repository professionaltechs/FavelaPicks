import axios from 'axios'

const token = localStorage.getItem('token')
console.log(token, " here")

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"
    }
})

export const axiosAuthInstance = axios.create({
    baseURL: "https://backend.favelapicks.com/",
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        "Authorization": `Bearer ${token}`
    }
})