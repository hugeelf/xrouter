import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/views/HomePage.vue'

Vue.use(VueRouter);

const routes = [
  { 
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  // {
  //   path: '/projects',
  //   name: 'Projects',
  //   component: ProjectsPage
  // },
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
