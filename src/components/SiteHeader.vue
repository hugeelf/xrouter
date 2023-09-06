<template>
    <nav class="header center">
        <router-link to="/home" class="header__logo-link">
            <img src="../assets/img/logo.svg" alt="logo" class="logo__img" />
            <span>{{ siteName }}</span>
        </router-link>
        <ul class="header__links">
            <li class="header__link" v-for="link in links" :key="link.id">
                <router-link :to="link.name" class="header__link">{{ link.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'SiteHeader',
    computed: {
        ...mapState(['siteName', 'links'])
    },
};
</script>

<style lang="scss">
    .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 52px 0px;

    &__logo-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        color: $colorBlackText;
        font-family: $fontFamilyDM;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 50px */
    }

    &__links {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }

    &__link {
        color: $colorBlackText;
        text-align: center;
        font-family: $fontFamilyJost;
        text-transform: capitalize;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 25px */
    }
}
</style>