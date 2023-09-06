<template>
    <div class="our-digits">
        <div class="our-digits__elements center">
          <div class="element">
            <span class="element__counter">12</span>
            <p class="element__description">Years Of Experiance</p>
          </div>
          <img src="../assets/img/Line.svg" alt="line" />
          <div class="element">
            <span class="element__counter">85</span>
            <p class="element__description">Success Project</p>
          </div>
          <img src="../assets/img/Line.svg" alt="line" />
          <div class="element">
            <span class="element__counter">15</span>
            <p class="element__description">Active Project</p>
          </div>
          <img src="../assets/img/Line.svg" alt="line" />
          <div class="element">
            <span class="element__counter">95</span>
            <p class="element__description">Happy CUstomers</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurDigits',

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
    .our-digits{
    background: #F4F0EC;
    padding-top: 151px;
    padding-bottom: 151px;
    &__elements{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        position: relative;
        // & div:not(:last-child)::after{
        //     content: url(../img/Line.svg);
        //     position: absolute;

        // }
    }
}

.element{
    display: flex;
    flex-direction: column;
    align-items: center;
    &__counter{
        color: $colorGold;
        font-family: $fontFamilyDM;
        font-size: 85px;
    }
    &__description{
        font-family: $fontFamilyJost;
        font-size: 22px;
        color: #4D5053;
    }
}
</style>