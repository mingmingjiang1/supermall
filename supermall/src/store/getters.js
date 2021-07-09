/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-02 18:28:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 18:49:28
 */

export default {
    getCartListLength(state) {
        return state.cartList.length;
    },
    getCartList(state) {
        return state.cartList;
    }
}