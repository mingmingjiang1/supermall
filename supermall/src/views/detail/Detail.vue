<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-30 10:58:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 22:40:47
-->
<template>
    <div id="detail">
        <DetailNavBar class="navbar" @itemClick="itemClick" ref="navbar"></DetailNavBar>
        <scroll class="wrapper" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="scrollControlDetail">           
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-goods-info :goods="goods"></detail-goods-info>
            <detail-shops-info :shops="shops"></detail-shops-info>
            <detail-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-info>
            <detail-param-info :paramInfo="detailParamInfo" ref="params" @loadImage="loadImage"></detail-param-info>
            <detail-comment-info :detailCommentInfo="detailCommentInfo" ref="comment" @loadImage="loadImage"></detail-comment-info>
            <goods-show :goods="detailRecommendInfo" ref="recommend" @loadImage="loadImage"></goods-show>
        </scroll>
        <detail-bottom-bar></detail-bottom-bar>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
    
    </div>
</template>

<script>
    import DetailNavBar from "./childComps/DetailNavBar"
    import { getDetail,Goods,Shops,getRecommend } from "network/detail"
    import DetailSwiper from "./childComps/DetailSwiper"
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
    import DetailShopsInfo from "./childComps/DetailShopsInfo"
    import DetailInfo from "./childComps/DetailInfo"
    import Scroll from 'components/common/scroll/Scroll'
    import DetailParamInfo from "./childComps/DetailParamInfo"
    import DetailCommentInfo from "./childComps/DetailCommentInfo"
    import GoodsShow from "components/content/GoodsShow/GoodsShow"
    import DetailBottomBar from "./childComps/DetailBottomBar"


    import { backTopMixin } from "common/mixin"
    import { mapActions } from "vuex"
    
    export default {
        name:"Detail",
        mixins:[backTopMixin],
        data() {
            return {
                id:null,
                topImages: [],
                goods: {},
                shops: {},
                detailInfo: {},
                detailParamInfo: {},
                detailCommentInfo: {},
                detailRecommendInfo: [],
                detailPosition:[],
                f:null,
                message:"",
                delay:2000,
            }
        },
        created() {
            this.id = this.$route.params.id;
            getDetail(this.id).then((res)=>{
                const data = res.result
                this.topImages = data.itemInfo.topImages
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                // 店铺信息
                this.shops = new Shops(data.shopInfo)
                
                // 详情数据
                this.detailInfo = data.detailInfo
                
                // 参数数据
                this.detailParamInfo = data.itemParams

                // 评论数据
                this.detailCommentInfo = data.rate.cRate ? data.rate.list[0] : {}
            });

            getRecommend().then((res)=>{
                this.detailRecommendInfo = res.data.list
            });


        },
        updated() {
                    this.$nextTick(()=>{
                        this.detailPosition = [];
                    this.detailPosition.push(0);

                    this.$refs.params.$el && this.detailPosition.push(this.$refs.params.$el.offsetTop);

                    this.$refs.comment.$el && this.detailPosition.push(this.$refs.comment.$el.offsetTop);

                    this.$refs.recommend.$el && this.detailPosition.push(this.$refs.recommend.$el.offsetTop);
                    console.log(this.detailPosition)
                })
                    
        },
        components:{
            DetailNavBar,
            DetailSwiper,
            DetailGoodsInfo,
            DetailShopsInfo,
            Scroll,
            DetailInfo,
            DetailParamInfo,
            DetailCommentInfo,
            GoodsShow,
            DetailBottomBar,
        },
        methods: {
            // ...mapActions(["addCart"]),
            backClick() {
                this.backTop();
            },
            imgLoad() {
                this.$refs.scroll.scroll.refresh();
            },
            itemClick(i) {
                this.$refs.scroll.scroll.scrollTo(0,-this.detailPosition[i])
            },
            loadImage() {
                this.$refs.scroll.scroll.refresh();
                // this.f();
            },
            debounce(callback, delay) {
                let timer = null;
                return function() {
                    if(timer) {
                        clearTimeout(timer)
                    }
                    timer = setTimeout(callback, delay)
                }
            },
            scrollControlDetail(posY) {
                this.listenShowBackTop(-posY.y);
                if(posY.y <= -this.detailPosition[3]) {
                    this.$refs.navbar.currentIndex = 3;
                } else if(posY.y <= -this.detailPosition[2]) {
                    this.$refs.navbar.currentIndex = 2;
                } else if(posY.y <= -this.detailPosition[1]) {
                    this.$refs.navbar.currentIndex = 1;
                } else {
                    this.$refs.navbar.currentIndex = 0;
                }
            },
            addToCart() {
                const product = {};
                product.image = this.topImages[0];
                product.title = this.goods.title
                product.desc = this.goods.desc
                product.price = this.goods.realPrice;
                product.iid = this.id;

                // this.$store.dispatch("addCart", product)
                // console.log(this.$store.state.carList)
                //this.$router.push("/shop");//这是我之前的做法，直接配置路由
                this.$store.dispatch("addCart", product).then((res)=>{
                    this.$toast.show(res, 1000)
                });    
                // this.addCart(product).then((res)=>console.log(res));
            }
        }
    }
</script>

<style scoped>
    .navbar {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    #detail {
        height: 100vh;
        position: relative;
        z-index: 9;
        background-color: #fff;
    }

    .wrapper {
        height: calc(100% - 44px - 49px);
    }
</style>