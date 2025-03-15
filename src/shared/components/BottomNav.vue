<template>
  <section class="content-category">
    <nav v-if="isHomePage" class="bottom-navbar" v-show="showBottomNav">
      <div class="navbar-content">
        <div class="catalog">
          <router-link to="/categories">
            <img
              src="../../assets/icons/cabinet-prodcut-decoration-furniture.svg"
              alt="Catalogue Icon"
              class="icon" />
            Catalogue
          </router-link>
        </div>
        <div class="categories">
          <router-link to="/category1">Womans fashion</router-link>
          <router-link to="/category2">Men's fashion</router-link>
          <router-link to="/category3">Electronics</router-link>
          <router-link to="/category4">Beauty care</router-link>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'BottomNav',
  setup() {
    const showBottomNav = ref(true);
    const lastScrollY = ref(0);
    const route = useRoute();
    const isHomePage = computed(() => route.path === '/');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY) {
        showBottomNav.value = false;
      } else if (currentScrollY < lastScrollY.value) {
        showBottomNav.value = true;
      }
      lastScrollY.value = currentScrollY;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      showBottomNav,
      isHomePage
    };
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main';

.bottom-navbar {
  position: fixed;
  width: 100%;
  height: 69px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(5px);
  padding: 0;
  left: 0;
  top: 75px;
  z-index: 999;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  padding: 0px 45px 0 45px;
}

.catalog {
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #333;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
      color: map-get($colors, peach);
    }

    .icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
}

.categories {
  display: flex;
  gap: 20px;

  a {
    color: #333;
    font-size: 0.9rem;
    font-weight: 500;

    &:hover {
      color: #555;
      text-decoration: underline;
    }
  }
}
</style>
