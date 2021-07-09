<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-01 16:17:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 09:56:42
-->
<template>
    <div v-if="Object.keys(detailCommentInfo).length !== 0" class="comment-info">
        <div class="title">
            <div class="left">
                用户评价
            </div>
            <div class="right">
                更多
            </div>
        </div>

        <div class="info-user">
            <img :src="detailCommentInfo.user.avatar" alt="" @load="loadImage">
            <span>{{detailCommentInfo.user.uname}}</span>
        </div>
        
        <div class="info-detail">
            <p>{{detailCommentInfo.content}}</p>
            <div class="info-other">
                <span class="date">{{detailCommentInfo.created | showDate}}</span>
                <span>{{detailCommentInfo.style}}</span>
            </div>
            <div class="info-images">
                <img :src="item" v-for="(item,i) in detailCommentInfo.images" :key="i" alt="" @load="loadImage">
            </div>
        </div>
    </div>

</template>

<script>
    import { formatDate } from "common/untils"
    export default {
        name: "DetailCommentInfo",
        props: {
            detailCommentInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            showDate(value) {
                const date = new Date(value * 1000);
                return formatDate(date, "yyyy-MM-dd hh:mm:ss")
            }
        },
        methods: {
            loadImage() {
                this.$emit("loadImage");
            }
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
        justify-content: space-between;
        border: 1px solid #ececec;
        padding: 20px;
        height: 25px;
        font-size: 14px;
        justify-self: center;
    }
    .info-images {
        margin-top: 10px;
    }

    .info-images img{
        width: 33%;
    }


    .info-user {
        margin-top: 10px;
    }

    .info-user img {
        width: 50px;
        vertical-align: middle;
    }

    .info-user span {
        font-size: 12px;
    }

    .info-detail {
        font-size: 15px;
    }

    .info-detail span {
        margin-right: 10px;
    }
</style>