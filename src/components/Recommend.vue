<template>
    <div class="recommend">
        <h3 class="title">热门推荐</h3>
        <div class="img-list">
            <li class="img-item" v-for="(item,index) in arrs" :key="index">
                <img :src="item.imgurl" alt="">
                <div class="count clearfix">
                    <p class="fl"><i class="iconfont biliicon-shipinbofangliang"></i> {{item.num[1]}}</p>
                     <p class="fr"><i class="iconfont biliicon-danmushu"></i>  {{item.num[2]}}</p>
                 </div>
                 <p class="title1">{{item.title}}</p>
            
            </li>
        </div>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Recommend",
    data(){
        return{
            img:require("@/assets/img/1.jpg"),
            arrs:null
        }
    },
    methods:{
        async getrec(){
            let {data} = await axios.get("/api/recommand")
            console.log(data)
            this.arrs = data;
        }
    },
    created(){
        this.getrec()
    }
}
</script>
