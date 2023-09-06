<template>
  <div class="attention">
    <div class="attention__info">
      <h1 class="attention__title"> {{ attention.title }}</h1>
      <p class="attention__description">
        {{ attention.subtitle }}
      </p>
      <router-link to="projects" class="button attention__button">Get Started
        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
            stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AttentionComponent',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
  computed: {
    ...mapState(['attention'])
  },
};
</script>

<style lang="scss" scoped>
.attention {
  padding-top: 230px;
  padding-bottom: 210px;
  background: url(../assets/img/bg_main.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 60px;
  padding-left: 53px;

  &__info {
    max-width: 433px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


  }

  &__title {
    color: $colorBlackText;
    font-size: 65px;
    font-family: $fontFamilyDM;
    margin-bottom: 18px;
  }

  &__description {
    font-family: $fontFamilyJost;
    color: #4D5053;
    font-size: 22px;
    margin-bottom: 21px;
  }

  &__button {
    display: flex;
    align-items: center;
    gap: 10px;
    background: $colorBlackText;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 28px 48px;
    color: #fff;
    font-family: $fontFamilyJost;
  }
}
</style>