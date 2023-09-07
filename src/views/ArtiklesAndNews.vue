<template>
    <div>
        <ArticlesHeader></ArticlesHeader>
        <ArticlesPost></ArticlesPost>
        <ArticlesNews></ArticlesNews>
    </div>
</template>

<script>
import ArticlesHeader from '@/components/ArticlesHeader';
import ArticlesNews from '@/components/ArticlesNews.vue';
import ArticlesPost from '@/components/ArticlesPost';
export default {
    name: 'ArtiklesAndNews',
    components: {
    ArticlesHeader,
    ArticlesPost,
    ArticlesNews
}
};
</script>

<style lang="scss" scoped>

</style>