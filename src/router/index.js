import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ArticlesAndNews from "@/views/ArtiklesAndNews.vue";
import BlogPage from "@/views/BlogPage.vue";
import ProjectPage from "@/views/ProjectPage.vue";
import SliderPage from '@/views/SliderPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/articles",
    name: "Articles",
    component: ArticlesAndNews,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectPage,
  },
  { 
    path: "/slider" ,
    name:'Slider',
    component: SliderPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
