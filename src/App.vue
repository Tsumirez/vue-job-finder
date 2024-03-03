<template>
  <MainNav />
  <HeroPanel />
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import HeroPanel from '@/components/HeroPanel.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    HeroPanel
  }
}
</script>
