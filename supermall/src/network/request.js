/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 12:51:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-28 10:50:37
 */
import axios from "axios";
export function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        return config
    }, err => {
        return Promise.reject(err);
    })

    instance.interceptors.response.use(res=> {
        return res.data
    }, err => {
        return Promise.reject(err);
    })
    return instance(config)
}