<template>
    <div>
        <BlogPageHeader></BlogPageHeader>
        <BlogPageGrid></BlogPageGrid>
    </div>
</template>

<script>
import BlogPageGrid from '@/components/BlogPageGrid.vue';
import BlogPageHeader from '@/components/BlogPageHeader.vue'
export default {
    
    name: 'BlogPage',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
    BlogPageHeader,
    BlogPageGrid
}
};
</script>

<style lang="scss" scoped>

</style>