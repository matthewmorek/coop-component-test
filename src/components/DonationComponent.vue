<template>
  <article class="panel">
    <header class="panel__header">
      <h3>Help refugees rebuild their lives and communities in Manchester</h3>
      <p class="panel__subtitle">Manchester Refugee Support Network (MRSN)</p>
    </header>

    <div class="panel__content">

      <div class="panel__progressbar" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
        <span class="panel__progressbar--value" :style="{ width: progress + '%' }"></span>
      </div>

      <div class="progress row">
        <div class="column all-6">
          <span>Raised so far</span>
          <h3>&pound;{{ raisedAmount }}</h3>
        </div>
        <div class="column all-6">
          <span>Target</span>
          <h3>&pound;{{ targetAmount }}</h3>
        </div>
      </div>

      <div class="donate row collapse">
        <div class="donate__amount column all-8">
          <label for="donation-amount" class="label__small">Donate to this project</label>
          <span class="donate__amount--currency">&pound;</span>
          <input type="number" name="donation-amount" id="donation-amount" class="donate__amount--input" v-on:keypress="isNumber" v-model="amount">
        </div>
        <div class="donate__cta column all-4">
          <button class="btn btn__tight" @click="btnClick">Donate</button>
        </div>
      </div>
    </div>

    <footer class="panel__footer">
      <a href="#">Learn more about causes local to you</a>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'DonationComponent',
  data: function () {
    return {
      status: '',
      target: 0,
      raised: 0,
      amount: null,
      errors: []
    };
  },
  computed: {
    targetAmount: function () {
      var _self = this;
      var val = (_self.target / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    raisedAmount: function () {
      // this method is similar to the one above, but because of the required
      // visual representation it works the periods and the commas a bit differently...
      var _self = this;
      var val = (_self.raised / 1).toFixed(2).replace(',', '.');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    donationAmount: function () {
      var _self = this;
      var val = (_self.amount / 1).toFixed(2).replace(',', '.');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    progress: function () {
      var _self = this;
      return Math.floor(_self.raised / _self.target * 100);
    }
  },
  mounted: function () {
    var _self = this;
    fetch('https://coop-mock-test-api.herokuapp.com', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.status !== 'OK') {
        _self.errors.push('Problem with reading from the API');
      } else {
        _self.status = json.status;
        _self.target = json.target;
        _self.raised = json.raised;
      }
    });
  },
  methods: {
    isNumber: function (evt) {
      evt = evt || window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      // kinda long-ish check for key codes
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 && charCode !== 37 && charCode !== 38 && charCode !== 39 && charCode !== 40) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    btnClick: function () {
      var _self = this;

      if (_self.amount > 0) {
        _self.$emit('click', { amount: _self.donationAmount });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "node_modules/coop-frontend-toolkit/styles/variables";

  h3 {
    padding-top: 0;
  }

  .label__small {
    font-size: 1rem;
  }

  .btn__tight {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 9px;
    padding-bottom: 9px;
  }

  .panel {
    border: 1px solid $grey-mid;
    padding: 1rem 1.5rem;
    background-color: $grey-light;
    box-shadow: rgba($black, 0.15) 0 0.125rem 0.25rem;
  }

  .panel__header {}

  .panel__subtitle {
    margin-bottom: 1rem;
  }

  .panel__progressbar {
    display: block;
    width: 100%;
    height: 2rem;
    border: 1px solid $green-mid;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;

    &--value {
      display: block;
      position: absolute;
      background-color: $green-mid;
      top: 0;
      bottom: 0;
      left: 0;
    }
  }

  .panel__footer {
    border-top: 1px solid $grey-mid;
    padding: 1rem 1.5rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    margin-bottom: -1rem;
    margin-top: 1.75rem;
  }

  .donate {
    padding-left: 1rem;
    padding-right: 1rem;

    &__amount {
      position: relative;

      &--currency {
        display: inline-block;
        position: absolute;
        padding: 12px 8px;
        cursor: default;
        font-weight: bold;
      }

      &--input {
        -moz-appearance: textfield;
        padding-left: 24px;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }

  .column {
    &.donate__amount {
      padding-right: 0.5rem;
    }
  }

  .donate__cta {
    padding-top: 34px;
  }
</style>
