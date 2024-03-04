<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="[action]">{{ action }}</span> <br />and get paid for your genius
    </h1>
    <h2 class="text-3xl font-light">Find your next job with us!</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList'

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
        this.action = nextElementInList(actions, this.action)
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
