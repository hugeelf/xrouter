<template>
    <div class="projects">
        <h2 class="projects__title">{{ projectsGrid.title }}</h2>
        <p class="projects__description">
            {{ projectsGrid.subtitle }}
        </p>
        <div class="projects__list">
            <div class="projects__project" v-for="project in mainPageProjects" :key="project.id">
                <img :src='project.img' alt="project image" class="project__img" />
                <div class="project__about">
                    <div class="about__info">
                        <h4 class="project__name"> {{ project.projectName }} </h4>
                        <div class="project__description"> {{ project.projectCategory }} </div>
                    </div>
                    <router-link to="slider" class="button project__button">
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
    name: 'ProjectsGrid',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },

    computed: {
        ...mapState(['projectsGrid', 'mainPageProjects'])
    }
};
</script>

<style lang="scss" scoped>
.projects {
    padding-top: 96px;
    padding-bottom: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        font-family: $fontFamilyDM;
        font-size: 50px;
        max-width: 737px;
        text-align: center;
    }

    &__description {
        font-family: $fontFamilyJost;
        font-size: 22px;
        margin-bottom: 93px;
        max-width: 737px;
        text-align: center;
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 55px;
    }

    &__project {
        max-width: 50%;

        &:nth-child(1) img {
            border-top-right-radius: 80px;
        }

        &:nth-child(2) img {
            border-top-left-radius: 80px;
        }

        &:nth-child(3) img {
            border-bottom-right-radius: 80px;
        }

        &:nth-child(4) img {
            border-bottom-left-radius: 80px;
        }
    }
}

.project {

    &__about {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 24px;
    }

    &__name {
        font-family: $fontFamilyDM;
        font-size: 25px;
        margin-bottom: 5px;
    }

    &__descriptioin {
        font-family: $fontFamilyJost;
        font-size: 22px;
    }

    &__button {
        padding: 26px 30px 26px 32px;
        border-radius: 50%;
        border: 1px solid transparent;
        background-color: #F4F0EC;
    }
}
</style>