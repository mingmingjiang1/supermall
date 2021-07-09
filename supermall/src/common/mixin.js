/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-26 17:48:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 13:07:00
 */
import BackTop from "components/content/BackTop/BackTop"
import { CONST_TOP_HEIGHT } from "common/const";

export const backTopMixin = {
    data() {
        return {
            isShowBackTop:false
        }
    },
    components: {
        BackTop,
    },
    methods: {
        listenShowBackTop(position) {
            this.isShowBackTop = position > CONST_TOP_HEIGHT;
        },
        backTop() {
            this.$refs.scroll.backClick();
        },
    }
}