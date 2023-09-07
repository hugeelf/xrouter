import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/views/HomePage.vue'
import ArticlesAndNews from '@/views/ArtiklesAndNews.vue'

Vue.use(VueRouter);

const routes = [
  { 
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesAndNews
  },
  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   component: BlogPage
  // }
  ];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
