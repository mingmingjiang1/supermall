/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 12:58:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-27 17:06:12
 */
import { request } from "./request";

export function getHomeMultidata() {
    return request({
        url:"/home/multidata"
    })
}

export function getHomeGoods(type, page) {
    return request({
        url:"/home/data",
        params:{
            type,
            page
        }
    })
}