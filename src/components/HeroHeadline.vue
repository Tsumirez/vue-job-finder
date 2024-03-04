<template>
  <section>
    <h1>Get payed for your genius</h1>
    <h2>Find your next job with us!</h2>
  </section>
</template>

<script>
export default {
  name: 'HeroHeadline',
  data() {
    return {
      test: 'Test data variable'
    }
  },
  created() {
    console.log('Hero Headline just got created. And it can access: ' + this.test)
  }
}
</script>
