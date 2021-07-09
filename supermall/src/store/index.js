/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-02 17:05:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 18:49:07
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations'
import { actions } from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList:[]
    },
    mutations: mutations,
    actions: actions,
    getters:getters
})

export default store

// 任何想要修改state的操作不应该在外面，而应该在store对象里面