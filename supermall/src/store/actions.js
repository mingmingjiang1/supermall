/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-02 18:03:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 18:41:56
 */
import {ADD_CART} from "./rename"
export const actions = {
    [ADD_CART]({state, commit}, payload) {
        return new Promise((resolve, reject)=> {
            let old = state.cartList.find((item)=>{
				return item.iid === payload.iid
			});
            if(old) {
                commit("addCount", old);
                resolve("添加数量成功！")
            } else {
                commit("addItem", payload);
                resolve("添加商品成功！！");
            }
        })

    }
}