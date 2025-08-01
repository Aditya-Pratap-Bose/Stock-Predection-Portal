import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})



// Request Interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        // console.log('request without auth header==>', config);
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

// Response Interceptors
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    // Handle failed responses
    async function (error) {
        const orignalRequest = error.config;
        if (error.response.status === 401 && !orignalRequest.retry) {
            orignalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')
            try {
                const response = await axiosInstance.post('/token/refresh/', { refresh: refreshToken })
                localStorage.setItem('accessToken', response.data.access)
                orignalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance(orignalRequest)
            } catch (error) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;