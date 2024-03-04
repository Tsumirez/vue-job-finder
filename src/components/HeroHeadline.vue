<template>
  <section>
    <h1>{{ action }} and get payed for your genius</h1>
    <h2>Find your next job with us!</h2>
  </section>
</template>

<script>
export default {
  name: 'HeroHeadline',
  data() {
    return {
      action: 'Design',
      showStopper: null
    }
  },
  beforeUnmount() {
    clearInterval(this.showStopper)
  },
  created() {
    this.changeActionVerb()
  },
  methods: {
    changeActionVerb() {
      const actions = ['Design', 'Build', 'Repair', 'Upgrade']

      this.showStopper = setInterval(() => {
        let currentActionIndex = actions.indexOf(this.action)
        this.action = actions[(currentActionIndex + 1) % actions.length]
      }, 3000)
    }
  }
}
</script>
