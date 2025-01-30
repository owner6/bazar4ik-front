<template>
  <section class="content-category">
    <nav class="bottom-navbar" v-show="showBottomNav">
      <div class="navbar-content">
        <div class="catalog">
          <router-link to="/categories">
            <img
              src="@/assets/icons/shelf--shelf-drawer-cabinet-prodcut-decoration-furniture.svg"
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
export default {
  name: 'BottomNav',
  data() {
    return {
      showBottomNav: true
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY) {
        this.showBottomNav = false;
      } else if (currentScrollY < this.lastScrollY) {
        this.showBottomNav = true;
      }

      this.lastScrollY = currentScrollY;
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
