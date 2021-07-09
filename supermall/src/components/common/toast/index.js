/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-03 18:45:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 20:16:57
 */

var obj = {}
import Toast from "./Toast"

obj.install = function(Vue) {
    // 1.创建vue类
    const ToastVue = Vue.extend(Toast);
    // 2.创建根组件对象
    const toastvue = new ToastVue()
    toastvue.$mount(document.createElement("div"))
    // 3.放到原型上去
    // const m = document.querySelector("#detail");
    // console.log(m)没办法获取结点，因为这些代码先于大部分代码之前运行
    document.body.appendChild(toastvue.$el)
    
    Vue.prototype.$toast = toastvue;
};

export default obj;