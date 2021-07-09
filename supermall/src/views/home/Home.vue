<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 11:33:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 21:29:46
-->
<template>
  <div id="home ignore">
    <nav-bar class="home-nav"><template #middle><div>购物街</div></template></nav-bar>
    <tab-control :title="title" @TabClick="TabClick" class="fixed" v-show="fixedTabControl"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="scrollControl" @pullingup="pullingUp">
      <home-swiper :banner="banner"></home-swiper>

      <home-view :recommend="recommend"></home-view>
  
      <feature-view>  </feature-view>
  
      <tab-control :title="title" @TabClick="TabClick" ref="tabcontrol" ></tab-control>
  
      <goods-show :goods="goods[currentType].list"></goods-show>  
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>  
</template>

<script>
  import { getHomeMultidata,getHomeGoods } from "network/home"
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "views/home/childComps/HomeSwiper"
  import HomeView from "views/home/childComps/HomeRecommend"
  import FeatureView from "views/home/childComps/FeatureView"
  import TabControl from "components/content/TabControl/TabControl"
  import GoodsShow from "components/content/GoodsShow/GoodsShow"
  import Scroll from 'components/common/scroll/Scroll'
  // import BackTop from "components/content/BackTop/BackTop"
  import { backTopMixin } from "common/mixin"


  export default {
    name: "Home",
    mixins:[backTopMixin],
    data() {
      return {
        // isShowBackTop:false,
        recommend:null,
        banner:null,
        title:["流行","新款","精选"],
        goods: {
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        },
        currentType: 'pop',
        fixedTabControl:false,
        offsetTop:0,
        saveY:0,
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeView,
      FeatureView,
      TabControl,
      GoodsShow,
      Scroll,
    },
    created() {
      this.getHomeGoods('pop');
      this.getHomeGoods('sell');
      this.getHomeGoods('new');
      this.getHomeMultidata();

//创建完了，直接执行回调，如果网速快的话，这个时候执行在mounted
//内才注册的组件的相关代码，会导致访问不到该组件，因为太快了
    },
    mounted() {
      // nextTick和所有数据获取之后再获取offset，否则nexttick执行的是最先一次的更改
      // this.$nextTick(()=>{
      //   this.getHomeMultidata().then(()=>{
      //     this.offsetTop = this.$refs.tabcontrol.$el.offsetTop;
      //   })
      // })
    },
    updated() {
      this.$nextTick(()=>{
        
          this.offsetTop = this.$refs.tabcontrol.$el.offsetTop;
        
      })
    },
    methods: {
      backClick() {
        // this.$refs.scroll.backClick();
        this.backTop();
        console.log(this.$refs.scroll.scroll.y);
        this.fixedTabControl = this.$refs.scroll.scroll.y > this.offsetTop;
      },
      TabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop';
            break
          case 1:
            this.currentType = 'new';
            break
          case 2:
            this.currentType = 'sell';
            break
        }
      },
      
      scrollControl(position) {
        // console.log(this.offsetTop)
        // this.isShowBackTop = (-position.y) > 1000;
        this.listenShowBackTop(-position.y);
        this.fixedTabControl = (-position.y) > this.offsetTop;
      },
      
      pullingUp() {
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.finishUp();//
      },
      
      getHomeMultidata() {
        return getHomeMultidata().then(res => {
          this.recommend = res.data.recommend.list
          this.banner = res.data.banner.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
        })
      }
    },
    activated() {
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
      this.$refs.scroll.scroll &&this.$refs.scroll.scrollTo(0, this.saveY);
      // setTimeout(()=>{
      //   this.$refs.scroll.scroll.refresh();
      //   this.$refs.scroll.scrollTo(0, this.saveY); 
      // }, 500)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY();
    }
  }
</script>

<style scoped>
  
  #home {
    /* padding-top: 44px; */
    height: 100vh;
  }

  .home-nav {
    /* 在使用原生滚动时，为了避免导航随着滚动一起滚动 */
    /* position: fixed;
    top: 0px;
    left:0;
    right: 0; */
    width: 100%;
    background-color: var(--color-text);
    color: #fff;
    z-index: 9;
  }
  .content {
    /* height: calc(100%-93px); */
    overflow: hidden;
    height: calc(100% - 93px);
  }

   .fixed {
    position: absolute;
		z-index: 9;
    width: 100%;
    top: 44px;
  }
</style>
