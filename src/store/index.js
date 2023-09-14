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
      "Kitchen",
      "Bedroom",
      "Building",
      "Architecture",
      "Kitchen Planing",
    ],

    projectCat: [
      { cat: "Bathroom", filterCategory: "bathroom" },
      { cat: "Bed Room", filterCategory: "bedroom" },
      { cat: "Kitchan", filterCategory: "kitchen" },
      { cat: "Living Area", filterCategory: "living" },
    ],
    ppGrid: [
      {
        id: 0,
        img: "./img/pg8.jpg",
        name: "Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 1,
        img: "./img/pg1.jpg",
        name: "Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 2,
        img: "./img/pg2.jpg",
        name: "Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 3,
        img: "./img/pg3.jpg",
        name: "Classic Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 4,
        img: "./img/pg4.jpg",
        name: "Classic Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 5,
        img: "./img/pg5.jpg",
        name: "Classic Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 6,
        img: "./img/pg6.jpg",
        name: "Classic Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 7,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 8,
        img: "./img/pg8.jpg",
        name: "Classic Minimal Bathroom",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 9,
        img: "./img/pg1.jpg",
        name: "Classic Minimal Bathroom 2",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 10,
        img: "./img/pg2.jpg",
        name: "Classic Minimal Bathroom 3",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 11,
        img: "./img/pg3.jpg",
        name: "Classic Minimal Bathroom 4",
        cat: "Decor / Artchitecture",
        from: "bathroom",
      },
      {
        id: 12,
        img: "./img/pg4.jpg",
        name: "Minimal Bedroom",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 13,
        img: "./img/pg5.jpg",
        name: "Minimal Bedroom",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 14,
        img: "./img/pg6.jpg",
        name: "Classic Minimal Bedroom",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 15,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Bedroom",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 16,
        img: "./img/pg8.jpg",
        name: "Classic Minimal Bedroom",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 17,
        img: "./img/pg1.jpg",
        name: "Classic Minimal Bedroom",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 18,
        img: "./img/pg2.jpg",
        name: "Classic Minimal Bedroom",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 19,
        img: "./img/pg3.jpg",
        name: "Classic Minimal Bedroom",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 20,
        img: "./img/pg4.jpg",
        name: "Classic Minimal Bedroom 2",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 21,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Bedroom 3",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 22,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Bedroom 4",
        cat: "Decor / Artchitecture",
        from: "bedroom",
      },
      {
        id: 23,
        img: "./img/pg4.jpg",
        name: "Minimal Kitchan",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 24,
        img: "./img/pg5.jpg",
        name: "Minimal Kitchan",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 25,
        img: "./img/pg6.jpg",
        name: "Classic Minimal Kitchan",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 26,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Kitchan",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 27,
        img: "./img/pg8.jpg",
        name: "Classic Minimal Kitchan",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 28,
        img: "./img/pg1.jpg",
        name: "Classic Minimal Kitchan",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 29,
        img: "./img/pg2.jpg",
        name: "Classic Minimal Kitchan",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 30,
        img: "./img/pg3.jpg",
        name: "Classic Minimal Kitchan",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 31,
        img: "./img/pg4.jpg",
        name: "Classic Minimal Kitchan 2",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 32,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Kitchan 3",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 33,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Kitchan 4",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 34,
        img: "./img/pg1.jpg",
        name: "Classic Minimal Kitchan 4",
        cat: "Decor / Artchitecture",
        from: "kitchen",
      },
      {
        id: 35,
        img: "./img/pg4.jpg",
        name: "Minimal Living Area",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 36,
        img: "./img/pg5.jpg",
        name: "Minimal Living Area",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 37,
        img: "./img/pg6.jpg",
        name: "Classic Minimal Living Area",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 38,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Living Area",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 39,
        img: "./img/pg8.jpg",
        name: "Classic Minimal Living Area",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 40,
        img: "./img/pg1.jpg",
        name: "Classic Minimal Living Area",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 41,
        img: "./img/pg2.jpg",
        name: "Classic Minimal Living Area",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 42,
        img: "./img/pg3.jpg",
        name: "Classic Minimal Living Area",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 43,
        img: "./img/pg4.jpg",
        name: "Classic Minimal Living Area 2",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 44,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Living Area 3",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 45,
        img: "./img/pg7.jpg",
        name: "Classic Minimal Living Area 4",
        cat: "Decor / Artchitecture",
        from: "living",
      },
      {
        id: 46,
        img: "./img/pg1.jpg",
        name: "Classic Minimal Living Area 4",
        cat: "Decor / Artchitecture",
        from: "living",
      },
    ],

    filterCategory: "kitchen",
  },
  getters: {
    leftSide(state) {
      return state.ppGrid.filter((item, index) => {
        if (index % 2 === 0 && item.from == state.filterCategory) {
          return item;
        }
      });
    },
    rightSide(state){
      return state.ppGrid.filter((item, index) => {
        if (index % 2 !== 0 && item.from == state.filterCategory) {
          return item;
        }
      });
    },
  },
  mutations: {
    SET_FILTERCATEGORY(state, newCategory){
      state.filterCategory=newCategory;
    }
  },
  actions: {},
  modules: {},
});
