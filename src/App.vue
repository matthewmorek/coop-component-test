<template>
  <div id="app">
    <div class="app__wrapper">
      <h1>Co-op Donate Component Test</h1>
      <transition name="flip" mode="out-in">
        <component :is="view" @click="donationProcess" :amount="donationAmount" :name="receipient"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import DonationComponent from './components/DonationComponent.vue';
import DonationComponentSuccess from './components/DonationComponentSuccess.vue';

export default {
  name: 'app',
  components: {
    'default': DonationComponent,
    'success': DonationComponentSuccess
  },
  data: function () {
    return {
      view: 'default',
      donationAmount: null,
      receipient: 'Manchester Refugee Support Network (MRSN)'
    };
  },
  methods: {
    donationProcess: function (data) {
      var _self = this;
      _self.view = 'success';
      _self.donationAmount = data.amount;
    }
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

  .flip-enter-active {
    perspective: 1000;
    animation: flipIn 0.75s;
  }

  @keyframes flipIn {
    0% {
      transform: perspective(400px) rotateX(90deg);
    }

    40% {
      transform: perspective(400px) rotateX(-10deg);
    }

    70% {
      transform: perspective(400px) rotateX(5deg);
    }

    100% {
      transform: perspective(400px) rotateX(0deg);
    }
  }
</style>
