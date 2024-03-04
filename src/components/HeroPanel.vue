<template>
  <main class="flex h-screen flex-col bg-yellow-200 pb-20 pt-10">
    <section>
      <div class="grid h-screen grid-cols-12">
        <div class="col-span-1 col-start-1">1 column</div>
        <div class="col-span-5"><hero-headline /></div>
        <div class="col-span-5">5 columns</div>
        <div class="col-span-1">1 column</div>
      </div>
    </section>
  </main>
</template>

<script>
import HeroHeadline from './HeroHeadline.vue'

export default {
  name: 'HeroPanel',
  components: { HeroHeadline }
}
</script>
