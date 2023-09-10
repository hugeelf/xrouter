<template>
    <section class="post center">
        <h2 class="post__title title_medium">Latest Post</h2>
        <div class="post__element">
            <img src="../assets/img/post_1.jpg" alt="post image" class="post__img">
            <div class="post__text">
                <h4 class="post__title">
                    {{ post.title }}
                </h4>
                <p class="post__description">
                    {{ post.shortDescription }}
                </p>
                <p class="post__thing">
                    {{ post.mainThing }}
                </p>
                <div class="news-preview__wrap">
                    <p class="news-preview__date">{{ post.date }}</p>
                    <router-link to="slider" class="button_main">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ArticlesPost',
    computed: {
        ...mapState(['post'])
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
.post {
    padding-top: 200px;

    &__title {
        padding-bottom: 0;
        color: #292F36;
        font-family: $fontFamilyDM;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__element {
        display: flex;
        flex-direction: row;
        gap: 65px;
        margin-bottom: 150px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        padding: 22px;
    }

    &__img {
        border-radius: 62px;
    }

    &__text {
        padding: 50px 34px 51px 0px;
    }

    &__title {
        color: $colorBlackText;
        font-family: $fontFamilyDM;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
        max-width: 460px;
        margin-bottom: 22px;
    }

    &__description,
    &__thing {
        color: $colorBlackText;
        font-family: $fontFamilyJost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        margin-bottom: 41px;
        max-width: 469px;
    }
}

.title_medium {
  color: $colorBlackText;
  font-family: $fontFamilyDM;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
}
</style>