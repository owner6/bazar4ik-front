<template>
  <section class="content-category">
    <nav class="bottom-navbar" v-show="showBottomNav || lastScrollY === 0">
      <div class="navbar-content">
        <div class="catalog">
          <router-link to="/categories">Catalogue</router-link>
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
export default {
  name: 'BottomNav',
  data() {
    return {
      showBottomNav: true,
      lastScrollY: 0,
      ticking: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > this.lastScrollY) {
            this.showBottomNav = false;
          } else {
            this.showBottomNav = true;
          }

          this.lastScrollY = currentScrollY;
          this.ticking = false;
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

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
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  padding: 0px 45px 0 45px;
}

.catalog {
  margin-left: 0;
}

.categories {
  display: flex;
  gap: 20px;
}

a {
  text-decoration: none;
}
</style>
