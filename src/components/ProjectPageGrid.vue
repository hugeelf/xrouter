<template>
    <!-- <div class="project-grid center">
        <div class="project-prewiev" v-for="project in ppGrid" :key="project.id">
            <img :src='project.img' alt="">
            <div class="project__about">
                <div class="about__info">
                    <h4 class="project__name"> {{ project.name }} </h4>
                    <div class="project__description"> {{ project.cat }} </div>
                </div>
                <router-link to="slider" class="button project__button">
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>
        </div>
    </div> -->
    <div class="project-flex center">
        <div class="left">
            <div class="left-item" v-for="project in ppGridOdd" :key="project.id">
                <img :src='project.img' alt="">
                <div class="project__about">
                    <div class="about__info">
                        <h4 class="project__name"> {{ project.name }} </h4>
                        <div class="project__description"> {{ project.cat }} </div>
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
        <div class="right">
            <div class="right-item" v-for="project in ppGridEven" :key="project.id">
                <img :src='project.img' alt="">
                <div class="project__about">
                    <div class="about__info">
                        <h4 class="project__name"> {{ project.name }} </h4>
                        <div class="project__description"> {{ project.cat }} </div>
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
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'ProjectPageGrid',

    data() {
        return {

        };
    },

    mounted() {

    },
    created() {
        this.SET_LEFTANDRIGHT();
    },

    methods: {
        ...mapMutations(['SET_LEFTANDRIGHT'])
    },
    computed: {
        ...mapState(['ppGrid', 'ppGridOdd', 'ppGridEven'])
    }
};
</script>

<style lang="scss" scoped>
// .project-grid {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 20px;
//     position: relative;
//     margin-bottom: 61px;

//     & .project-prewiev:nth-child(4) img,
//     .project-prewiev:nth-child(8) img {
//         margin-top: -331px;
//     }
// }

// .project-prewiev {
//     display: flex;
//     flex-direction: column;

// }

.project {
    &-flex {
        display: flex;
        flex-direction: row;
        column-gap: 30px;
        margin-bottom: 61px;
    }

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
.left, .right{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>