<template>
  <div id="app">
    <DonationComponent msg="Sample text"/>
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

<style lang="scss"></style>
