<template>
    <aside>
        <h3 class="tag">Tags</h3>
        <div class="buttons">
            <button class="tag-button" v-for="(button, index) in tagsButtons" :key="index">{{ button }}</button>
        </div>
    </aside>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'BlogPageTags',

    data() {
        return {
        };
    },

    mounted() {

    },

    methods: {

    },
    computed: {
        ...mapState(['tagsButtons'])
    }
};
</script>

<style lang="scss" scoped>
.tag {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    margin-bottom: 24px;

    &-button {
        padding: 9px 30px;
        border: 1px solid transparent;
        border-radius: 10px;
        background: #F4F0EC;
        margin-right: 10px;
        margin-bottom: 10px;
        &:hover{
            background: #292F36;
            color: #fff;
        }
    }
}
</style>