<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-28 10:58:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 12:49:40
-->
<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                scroll: null,
            }
        },
        props: {
            probeType: {
                default: 0,
                type:Number
            },
            pullUpLoad: {
                type:Boolean,
                default:false
            }
        },
        created() {
            this.$nextTick(()=>{
                this.scroll = new BScroll(this.$refs.wrapper, {
                    click:true,
                    taps:true,
                    probeType: this.probeType,
                    pullUpLoad: this.pullUpLoad,
                });
                console.log("我是scroll组件，我已经创建")
                this.scroll.on("scroll", (p)=>{this.$emit("scroll", p)})
                this.scroll.on("pullingUp", ()=>this.$emit("pullingup"))
            }) 
            
        },
        methods: {
            backClick() {
                this.scroll.scrollTo(0, 0);
            },
            finishUp() {
                this.scroll.finishPullUp();
                // this.scroll.scrollHeight = 1000000,第一种指定高度但是不好，
                this.scroll.refresh();//默认scrollHeight在同步线程中直接计算，且计算完之后就不再更改，这个方法调用之后，会重新计算高度
            },
            getScrollY() {
                return this.scroll ? this.scroll.y : 0;
            },
            scrollTo(x, y) {
                this.scroll.scrollTo(x, y, 30);
            }
        }
    }
</script>

<style scoped>
    
</style>