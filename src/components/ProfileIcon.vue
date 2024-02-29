<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="profile icon" />
</template>

<script>
export default {
  name: 'ProfileIcon',
  data() {
    return {
      imageLink: '/src/assets/wukong.webp'
    }
  }
}
</script>
