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

    // news: [
    //   {
    //     id: 1,
    //     newsImg: "./img/news_1.jpg",
    //     newsCategory: "Kitchan Design",
    //     newsTitle: "Let’s Get Solution For Building Construction Work",
    //     newsDate: "26 December,2022",
    //   },
    //   {
    //     id: 2,
    //     newsImg: "./img/news_2.jpg",
    //     newsCategory: "Kitchan Design",
    //     newsTitle: "Let’s Get Solution For Building Construction Work",
    //     newsDate: "26 December,2022",
    //   },
    //   {
    //     id: 3,
    //     newsImg: "./img/news_3.jpg",
    //     newsCategory: "Kitchan Design",
    //     newsTitle: "Let’s Get Solution For Building Construction Work",
    //     newsDate: "26 December,2022",
    //   },
    // ],

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

    post: {
      id: 1,
      title: "Low Cost Latest Invented Interior Designing Ideas",
      shortDescription:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.",
      mainThing:
        "Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      date: "26 December,2022 ",
    },

    news: [
                {
                    id: 1,
                    newsImg: "./img/news_1.jpg",
                    newsCategory: "Kitchan Design",
                    newsTitle: "Let’s Get Solution For Building Construction Work",
                    newsDate: "26 December,2022 ",
                },
                {
                    id: 2,
                    newsImg: "./img/news_2.jpg",
                    newsCategory: "Living Design",
                    newsTitle: "Low Cost Latest Invented Interior Designing Ideas",
                    newsDate: "22 December,2022 ",
                },
                {
                    id: 3,
                    newsImg: "./img/news_3.jpg",
                    newsCategory: "Interior Design",
                    newsTitle: "Best For Any Office & Business Interior Solution",
                    newsDate: "25 December,2022 ",
                },
                {
                    id: 4,
                    newsImg: "./img/news_4.jpg",
                    newsCategory: "Kitchan Design",
                    newsTitle: "Let’s Get Solution For Building Construction Work",
                    newsDate: "26 December,2022 ",
                },
                {
                    id: 5,
                    newsImg: "./img/news_5.jpg",
                    newsCategory: "Living Design",
                    newsTitle: "Low Cost Latest Invented Interior Designing Ideas",
                    newsDate: "22 December,2022 ",
                },
                {
                    id: 6,
                    newsImg: "./img/news_6.jpg",
                    newsCategory: "Interior Design",
                    newsTitle: "Best For Any Office & Business Interior Solution",
                    newsDate: "25 December,2022 ",
                },
            ],
    tagsButtons: [
      'Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planing'
    ],

    projectCat: [
      'Bathroom', 'Bed Room', 'Kitchan', 'Living Area'
    ],
    ppGrid:[
      {id: 1, img: "./img/pg1.jpg", name: 'Minimal Bedroom', cat:'Decor / Artchitecture'},
      {id: 2, img: "./img/pg2.jpg", name: 'Minimal Bedroom', cat:'Decor / Artchitecture'},
      {id: 3, img: "./img/pg3.jpg", name: 'Classic Minimal Bedroom', cat:'Decor / Artchitecture'},
      {id: 4, img: "./img/pg4.jpg", name: 'Classic Minimal Bedroom', cat:'Decor / Artchitecture'},
      {id: 5, img: "./img/pg5.jpg", name: 'Classic Minimal Bedroom', cat:'Decor / Artchitecture'},
      {id: 6, img: "./img/pg6.jpg", name: 'Classic Minimal Bedroom', cat:'Decor / Artchitecture'},
      {id: 7, img: "./img/pg7.jpg", name: 'Classic Minimal Bedroom', cat:'Decor / Artchitecture'},
      {id: 8, img: "./img/pg8.jpg", name: 'Classic Minimal Bedroom', cat:'Decor / Artchitecture'},
    ],

    ppGridOdd:[],
    ppGridEven:[]

  },
  getters: {},
  mutations: {
    SET_LEFTANDRIGHT(state){
      state.ppGridEven =[];
      state.ppGridOdd =[];
      for (let index = 0; index < state.ppGrid.length; index++) {
        if(index%2===0){
          this.state.ppGridOdd.push(state.ppGrid[index])
        } else{
          this.state.ppGridEven.push(state.ppGrid[index])
        }        
      }
    }
  },
  actions: {},
  modules: {},
});
