<template>
    <div class="blog-page-grid center">
        <BlogPagePost></BlogPagePost>
        <BlogPageTags></BlogPageTags>
    </div>
</template>

<script>
import BlogPagePost from './BlogPagePost.vue';
import BlogPageTags from './BlogPageTags.vue';

export default {
    name: 'BlogPageGrid',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { BlogPageTags, BlogPagePost }
};
</script>

<style lang="scss" scoped>
    .blog-page-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 52px;
        margin-bottom: 96px;
    }
</style>