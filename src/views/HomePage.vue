<template>
    <div>
        <section class="section center">
            <AttentionComponent></AttentionComponent>
        </section>
        <section class="section center">
            <ProjectsGrid></ProjectsGrid>
        </section>
        <OurDigits></OurDigits>
        <section class="section center">
            <NewsComponent></NewsComponent>
        </section>
    </div>
</template>

<script>
import AttentionComponent from '@/components/AttentionComponent.vue';
import OurDigits from '@/components/OurDigits.vue';
import ProjectsGrid from '@/components/ProjectsGrid.vue';
import NewsComponent from '@/components/NewsComponent.vue'

export default {
    name: 'HomePage',
    data() {
        return {

        };
    },
    mounted() {
    },

    methods: {

    },

    components: {
    AttentionComponent,
    ProjectsGrid,
    OurDigits,
    NewsComponent
}
};
</script>

<style lang="scss" scoped></style>