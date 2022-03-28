<template>
  <div>
      <div id="contianer">
      <ul class="nav">
      <li>首页</li>
      <li>动画</li>
      <li class="active">番剧</li>
      <li>国创</li>
      <li>音乐</li>
    </ul>
    <div class="nav-child">
      <router-link to="/series/recommend" ><span class="active">推荐</span> </router-link>
      <router-link to="/series/cartoon"><span>连载动画</span> </router-link>
      <router-link to="/series/fcartoon"><span>完结动画</span> </router-link>
       <router-link to="/series/offcial"><span>官方延伸</span> </router-link>
      </div>
    </div>
   <router-view></router-view>
  <!-- <My-footer></My-footer> -->
  </div>
</template>
<script>

export default {
  name: "SeriesView",
  components:{
   
  },
  methods:{
    fn(){
       this.$router.push({path:"/series/recommend"})
    }
   
  },
  created(){
    this.fn()
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#contianer{
  width: 640px;
}
ul,
li {
  list-style: none;
}
body {
  font-size: 0.14rem;
}
a{
    text-decoration: none;
}
.nav {
  /* font-size: .18rem; */
  width: 640px;
  height: 53px;
  display: flex;
  align-items: center;

}
.nav li {
  /* padding: 0 .5px .01px; */
  flex: 1;
  
}
.nav a.active {
  color: #fb7299;
  border-bottom: 0.01rem solid #fb7299;
}
.nav-child {
  width: 100%;
  display: flex;
  height: 46px;
  align-items: center;
  border-bottom: 0.001rem solid #ccc;
}
.nav-child a{
  flex: 1;
  display: inline-block;
  padding: 10px 0;
    width: 20%;
    color: #505050;
}
.nav-child a span{
  padding: 10px 0;
}
.nav-child a:hover span{
  color: #fb7299;
  border-bottom: 3px solid #fb7299;
}
.nav-child a span.active{
  color: #fb7299;
  border-bottom: 3px solid #fb7299;
}

</style>
