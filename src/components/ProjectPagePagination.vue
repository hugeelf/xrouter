<template>
    <div class="pagination">
            <button class="button_main pagination__button button_active">01</button>
            <button class="button_main pagination__button">02</button>
            <button class="button_main pagination__button">03</button>
            <button class="button_main pagination__button">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
</template>

<script>
export default {
    name: 'ProjectPagePagination',

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
    .pagination {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 200px;

    &__button {
        background-color: $colorWhite;
        border: 1px solid #CDA274;
    }
}
</style>