<template>
    <div>
        <ProjectPageHeader></ProjectPageHeader>
        <ProjectPageFilter></ProjectPageFilter>
        <ProjectPageGrid></ProjectPageGrid>
        <ProjectPagePagination></ProjectPagePagination>
    </div>
</template>

<script>
import ProjectPageFilter from '@/components/ProjectPageFilter.vue';
import ProjectPageHeader from '@/components/ProjectPageHeader.vue';
import ProjectPageGrid from '@/components/ProjectPageGrid.vue'
import ProjectPagePagination from '@/components/ProjectPagePagination.vue';

export default {
    name: 'ProjectPage',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { ProjectPageHeader, ProjectPageFilter, ProjectPageGrid, ProjectPagePagination }
};
</script>

<style lang="scss" scoped>

</style>