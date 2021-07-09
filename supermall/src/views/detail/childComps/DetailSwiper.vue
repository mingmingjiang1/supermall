<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-30 12:53:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-30 15:16:17
-->
<template>
    <div>
        <swiper>
            <swiper-item v-for="(item,i) in topImages" class="swiper-item">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {Swiper, SwiperItem} from "components/common/swiper";
    export default {
        props: {
            topImages: {
                type:Array,
                default() {
                    return []
                }
            }
        },
        components: {
            Swiper, SwiperItem
        },
    }
</script>

<style scoped>
    .swiper-item {
        height: 300px;
        overflow: hidden;
    }
</style>