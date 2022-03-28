import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SeriesView from "../views/SeriesView.vue";
import Cartoon from "../components/Cartoon.vue";
import Consult from "../components/Consult.vue";
import FinCartton from "../components/FinCartton.vue";
import Offcial from "../components/Offcial.vue";
import Recommend from "../components/Recommend.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect:"/series",
    component: HomeView,
  },
  // {
  //   path: "/footer",
  //   name: "home",
  //   components: {footer},
  // },
  {
    path: "/series",
    name: "series",
    component: SeriesView,
    children:[
      {path:"cartoon",component:Cartoon},
      {path:"consult",component:Consult},
      {path:"fcartoon",component:FinCartton},
      {path:"offcial",component:Offcial},
      {path:"recommend",component:Recommend}
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
