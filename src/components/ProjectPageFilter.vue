<template>
    <div class="project-cat center">
        <button class="project-button" 
        v-for="(cat, index) in projectCat" 
        :key="index"
        @click="SET_FILTERCATEGORY(cat.filterCategory)"
        > {{ cat.cat }}
    </button>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';

export default {
    name: 'PageFilter',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        ...mapMutations(['SET_FILTERCATEGORY'])
    },
    computed: {
        ...mapState(['projectCat', 'filterCategory'])
    }
};
</script>

<style lang="scss" scoped>
    .project-cat{
        display: flex;
        justify-content: center;
        border: 1px solid #CDA274;
        max-width: 880px;
        border-radius: 18px;
        margin-bottom: 61px;
    }
    .project-button{
        border: 1px solid transparent;
        border-radius: 18px;
        background: none;
        padding: 26px 66px;
        &:hover{
            background: #CDA274;
            color: #fff;
        }
    }
</style>