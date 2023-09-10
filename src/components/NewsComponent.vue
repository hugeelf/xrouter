<template>
    <div class="news">
        <h2 class="news__title">Articles & News</h2>
        <p class="news__description">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
        </p>
        <div class="news-place">
            <div class="news-place__element single-news" v-for="singleNews in newsPart" :key="singleNews.id">
                <div class="single-news__visual">
                    <img :src='singleNews.newsImg' alt="news img" class="single-news__img" />
                    <router-link to="articles" class="button single-news__button">
                        {{ singleNews.newsCategory }}
                    </router-link>
                </div>
                <h4 class="single-news__title">
                    {{ singleNews.newsTitle }}
                </h4>
                <div class="single-news__info">
                    <p class="single-news__date">{{ singleNews.newsDate }}</p>
                    <router-link to="slider" class="button project__button single-news__more-button">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'NewsComponent',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
    computed: {
        ...mapState(['news']),
        newsPart(){
            return this.news.slice(0,3);
        }
    }
};
</script>

<style lang="scss">
.project {
    &__button {
        padding: 26px 30px 26px 32px;
        border-radius: 50%;
        border: 1px solid transparent;
        background-color: #F4F0EC;
    }
}

.news {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 96px;
    padding-bottom: 96px;

    &__title,
    &__description {
        max-width: 811px;
    }

    &__title {
        font-family: $fontFamilyDM;
        font-size: 50px;
        text-align: center;
    }

    &__description {
        font-family: $fontFamilyJost;
        font-size: 22px;
        margin-bottom: 93px;
        text-align: center;
    }

    &-place {
        display: flex;
        flex-direction: row;
        gap: 27px;

        & .news-place__element:nth-child(even) {
            background: #F4F0EC;

            & .button {
                background: $colorWhite;
            }
        }

        &__element {
            max-width: 380px;
            border: 1px solid $colorGray;
            display: flex;
            flex-direction: column;
            border-radius: 40px;
            padding: 21px;
        }
    }
}

.single-news {
    &__visual {
        position: relative;
        align-self: center;
    }

    &__img {
        border-radius: 40px 40px 0px 0px;
    }

    &__button {
        position: absolute;
        bottom: 20px;
        left: 20px;
        padding: 15px 10px;
        border: 1px solid transparent;
        border-radius: 10px 10px 10px 0px;
        font-family: $fontFamilyJost;
        font-size: 16px;
        background: #fff;
    }

    &__title {
        font-family: $fontFamilyDM;
        font-size: 25px;
        max-width: 252px;
    }

    &__info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    } 

}
</style>