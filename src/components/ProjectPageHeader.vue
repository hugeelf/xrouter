<template>
    <div>
        <section class="articles">
            <div class="center articles__die">
                <h2 class="articles__title title_medium">
                    Our Project
                </h2>
                <ul class="articles__breadcrumbs">
                    <li class="articles__breadcrumb post__description"><router-link to="home">Home</router-link></li>
                    <li class="articles__breadcrumb post__description"><router-link to="projects">Project</router-link></li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'XrouterProjectPageHeader',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.articles {
    padding-top: 180px;
    background-image: url(../assets/img/projects_bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;

    &__die {
        background-color: $colorWhite;
        border-radius: 37px 37px 0px 0px;
        padding: 41px 78px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__breadcrumbs {
        display: flex;
        flex-direction: row;

        & li:nth-child(odd)::after {
            content: '/';
            padding-left: 8px;
            padding-right: 8px;
        }
    }

    &__breadcrumb {
        margin-bottom: 0 !important;
        color: #4D5053;
        font-family: $fontFamilyJost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }

}

.articles__title {
    color: #292F36;
    font-family: $fontFamilyDM;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
}
</style>