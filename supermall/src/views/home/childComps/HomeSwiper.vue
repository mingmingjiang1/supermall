<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 13:55:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-28 23:00:46
-->
<template>
    <Swiper>
        <SwiperItem v-for="(item,i) in banner" :key="i">
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </SwiperItem>
    </Swiper>
</template>


<script>
    import {Swiper,SwiperItem} from "components/common/swiper"
    export default {
        props:{
            banner: {
                type:Array,
                default() {
                    return [];
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
    }
</script>