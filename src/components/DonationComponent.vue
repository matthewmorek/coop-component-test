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
  .column {
    &.donate__amount {
      padding-right: 0.5rem;
    }
  }
</style>
