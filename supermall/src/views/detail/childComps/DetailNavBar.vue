<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-30 11:34:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 10:30:34
-->
<template>
    <nav-bar>
        <div slot="left" class="left-icon">
            <div @click="backClick"></div>
        </div>
        <div slot="middle" class="outer">
            <div v-for="(title,i) in titles" :class="{active:currentIndex===i}" @click="itemClick(i)">
                {{title}}
            </div>    
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar"
    export default {
        name:"detailnavbar",
        data() {
            return {
                titles:[
                    "商品",
                    "参数",
                    "评论",
                    "推荐"
                ],
                currentIndex: 0,
            }
        },
        components: {
            NavBar
        },
        methods: {
            itemClick(i) {
                this.currentIndex = i;
                this.$emit("itemClick", i);
            },
            backClick() {
                // this.$router.go(-1);
                this.$router.back();
            },
        }

    }
</script>

<style scoped>
.outer {
    display: flex;
    font-size: 15px;
}

.outer div {
    flex: 1;
}

.active {
    color: var(--color-high-text);
}

.left {
    border: 0;
}

.left-icon div {
    width: 13px;
    height: 13px;
    border:1px solid black;
    border-left: 0;
    border-bottom: 0;
    margin: auto;
    transform: rotate(225deg);
    margin-top: 16px;
}
</style>