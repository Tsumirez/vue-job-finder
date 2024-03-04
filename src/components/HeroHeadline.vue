<template>
  <section>
    <h1>
      <span :class="[action]">{{ action }}</span> and get payed for your genius
    </h1>
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
  computed: {
    actionClasses() {}
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

<style scoped>
.Build {
  color: #a33320;
}
.Design {
  color: #333333;
}
.Repair {
  color: #3366cc;
}
.Upgrade {
  color: #33cc66;
}
</style>
