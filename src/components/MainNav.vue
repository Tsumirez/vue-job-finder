<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full w-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in menuItems" :key="menuItem">
              <a href="" class="flex h-full items-center py-5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex items-center">
          <profile-icon v-if="isLoggedIn" />
          <action-button text="Sign In" type="primary" @click="loginUser" v-else />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import ProfileIcon from './ProfileIcon.vue'
import SubNav from '@/components/SubNav.vue'

export default {
  name: 'MainNav',
  components: { ActionButton, ProfileIcon, SubNav },
  data() {
    return {
      company: 'Zef Career Finder',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Location', 'Life with us', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },
  computed: {
    headerHeightClass() {
      if (this.isLoggedIn) return 'h-32'
      return 'h-16'
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
}
</script>
