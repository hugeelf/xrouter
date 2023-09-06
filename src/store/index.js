import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    siteName: "Interno",

    links: [
      { id: 1, name: "home" },
      { id: 2, name: "projects" },
      { id: 3, name: "blog" },
    ],

    attention: {
      title: "Let Your Home Be Unique",
      subtitle:
        "There are many variations of the passages of lorem Ipsum fromavailable, majority.",
    },

    projectsGrid: {
      title: "Follow Our Projects",
      subtitle:
        "It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.",
    },

    mainPageProjects: [
      {
        id: 1,
        img: "./img/project_1.jpg",
        projectName: "Modern Kitchan",
        projectCategory: "Decor / Artchitecture",
      },
      {
        id: 2,
        img: "./img/project_2.jpg",
        projectName: "Modern Kitchan",
        projectCategory: "Decor / Artchitecture",
      },
      {
        id: 3,
        img: "./img/project_3.jpg",
        projectName: "Modern Kitchan",
        projectCategory: "Decor / Artchitecture",
      },
      {
        id: 4,
        img: "./img/project_4.jpg",
        projectName: "Modern Kitchan",
        projectCategory: "Decor / Artchitecture",
      },
    ],

    news: [
      {
        id: 1,
        newsImg: "./img/news_1.jpg",
        newsCategory: "Kitchan Design",
        newsTitle: "Let’s Get Solution For Building Construction Work",
        newsDate: "26 December,2022",
      },
      {
        id: 2,
        newsImg: "./img/news_2.jpg",
        newsCategory: "Kitchan Design",
        newsTitle: "Let’s Get Solution For Building Construction Work",
        newsDate: "26 December,2022",
      },
      {
        id: 3,
        newsImg: "./img/news_3.jpg",
        newsCategory: "Kitchan Design",
        newsTitle: "Let’s Get Solution For Building Construction Work",
        newsDate: "26 December,2022",
      },
    ],

    socialLinks: [
      {
        id: 1,
        name: "twitter",
        address: "https://www.twitter.com",
        img: "./img/twitter.svg",
      },
      {
        id: 2,
        name: "linkedIn",
        address: "https://www.linkedin.com",
        img: "./img/linkedin.svg",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
