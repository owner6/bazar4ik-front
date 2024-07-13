<template>
  <div class="content-category">
    <nav class="bottom-navbar" v-show="showBottomNav || lastScrollY === 0">
      <div class="catalog">
        <router-link to="/categories">Categories</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  components: "",
  data() {
    return {
      showBottomNav: true,
      lastScrollY: 0,
      ticking: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  handleScroll() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > this.lastScrollY) {
            if (currentScrollY === 0) {
              this.showBottomNav = true;
            } else {
              this.showBottomNav = false;
            }
          } else {
            if (currentScrollY === 0) {
              this.showBottomNav = true;
            } else {
              this.showBottomNav = false;
            }
          }

          this.lastScrollY = currentScrollY;
          this.ticking = false;
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.bottom-navbar {
  position: fixed;
  width: 100%;
  height: 69px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(5px);
}

.catalog {
  display: inline;
  margin-left: 75px;
}
</style>
