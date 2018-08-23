<template>
  <div id="app">
    <div class="app__wrapper">
      <h1>Co-op Donate Component Test</h1>
        <component :is="view" @click="donationProcess" :amount="donationAmount"></component>
    </div>
  </div>
</template>

<script>
import DonationComponent from './components/DonationComponent.vue';

export default {
  name: 'app',
  components: {
    DonationComponent
  }
};
</script>

<style lang="scss">
  .app__wrapper {
    max-width: 24em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    margin-bottom: 2em;
  }
</style>
