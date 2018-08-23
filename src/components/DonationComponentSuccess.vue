<template>
  <article class="panel">
    <div class="panel__content">
      <h2>Thank you for your donation!</h2>
      <p>You donated <strong>&pound;{{ amount }}</strong> to <strong>Manchester Refugee Support Network (MRSN)</strong>.</p>
    </div>

    <footer class="panel__footer">
      <a href="#">Learn more about causes local to you</a>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'DonationComponentSuccess',
  props: ['amount']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "node_modules/coop-frontend-toolkit/styles/variables";

  .panel {
    border: 1px solid $grey-mid;
    padding: 1rem 1.5rem;
    background-color: $grey-light;
    box-shadow: rgba($black, 0.15) 0 0.125rem 0.25rem;
  }

  .panel__content {
    text-align: center;
    padding-bottom: 2rem;
    padding-top: 2rem;
    
    h2 {
      line-height: 1.4;
      margin-bottom: 1.5rem;
    }

    p {
      margin-bottom: 0;
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
</style>
