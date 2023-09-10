<template>
    <section class="news center">
        <h2 class="news__title title_medium">Articles & News</h2>
        <ul class="news__list">
            <li class="news-preview" v-for="preview in news" :key="preview.id">
                <div class="news-preview__visual">
                    <img :src="preview.newsImg" alt="product image" class="news-preview__img" />
                    <button class="button news-preview__button button_visual">
                        {{ preview.newsCategory }}
                    </button>
                </div>
                <div class="news-preview__footer">
                    <h4 class="news-preview__title">{{ preview.newsTitle }}</h4>
                    <div class="news-preview__wrap">
                        <p class="news-preview__date">{{ preview.newsDate }}</p>
                        <router-link to="SliderPage" class="button_main">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </router-link> 
                    </div>
                </div>
            </li>
        </ul>
        <div class="pagination">
            <button class="button_main pagination__button button_active">01</button>
            <button class="button_main pagination__button">02</button>
            <button class="button_main pagination__button">03</button>
            <button class="button_main pagination__button">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ArticlesNews',

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
    }
};
</script>

<style lang="scss" scoped>
.news {
    margin-bottom: 200px !important;

    &__title {
        padding-bottom: 30px;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 30px;
        row-gap: 30px;
        margin-bottom: 50px;
    }

    &-preview {
        padding: 20px 20px 45px 20px;
        border: 1px solid #E7E7E7;
        border-radius: 62px;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        transition: background-color .3s;

        &:hover {
            background-color: $colorActive;

            & .button_main {
                background-color: $colorWhite;
            }
        }

        &__visual {
            position: relative;
        }

        &__img {
            width: 100%;
            height: auto;
            border-radius: 62px 62px 0 0;
        }

        &__button {
            position: absolute;
            left: 20px;
            bottom: 20px;
            padding: 8px 10px;
            border: 1px solid transparent;
            border-radius: 8px 8px 8px 0px;
            background-color: $colorWhite;
            font-family: $fontFamilyJost;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }

        &__title {
            color: $colorBlackText;
            font-family: $fontFamilyDM;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
            max-width: 320px;
        }

        &__footer {
            padding-top: 11px;
            display: flex;
            flex-direction: column;
        }

        &__wrap {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 30px;
        }

        &__date {
            color: $colorBlackText;
            font-family: $fontFamilyJost;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }
    }
}

.pagination {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;

    &__button {
        background-color: $colorWhite;
        border: 1px solid #CDA274;
    }
}
</style>