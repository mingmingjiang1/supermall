/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-02 18:03:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 21:17:49
 */

import {ADD_ITEM, ADD_COUNT} from "./rename"

export const mutations = {
    [ADD_ITEM](state, payload) {
        payload.count = 1;
        payload.checked = true;
        state.cartList.push(payload);
    },
    [ADD_COUNT](state, payload) {
        payload.count++;
    }
}