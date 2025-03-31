<template>
  <div id="app" class="container">
    <MainNav />
    <router-view v-slot="{ Component }">
      <component :is="Component" v-if="!isLoading" />
      <div v-else>Завантаження...</div>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import MainNav from '@/shared/components/MainNav.vue';
import Footer from '@/shared/components/FooterNav.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'App',
  setup() {
    useHead({
      title: 'My marketplace',
      meta: [
        { name: 'description', content: 'The best marketplace for listings!' }
      ]
    });
  },
  components: {
    MainNav,
    Footer
  },
  data() {
    return {
      isLoading: false // Прапорець для завантаження
    };
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh; /* Гарантує, що додаток займає весь екран */
  display: flex;
  flex-direction: column; /* Вирівнює секції вертикально */
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
