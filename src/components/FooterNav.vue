<template>
  <footer class="footer">
    <div class="content has-text-centered centered-block">
      <p>
        <strong>Contact Us:</strong> You can reach us at
        <a href="mailto:support@example.com">support@example.com</a> or call us
        at (123) 456-7890.
      </p>
      <p>
        <router-link to="/privacy-policy">Privacy Policy</router-link> |
        <router-link to="/terms-of-service">Terms of Service</router-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>

// FooterComponent.vue
<style lang="scss">
@import "@/assets/scss/main.scss";

.footer {
  background-color: $extra-color-Peach;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  padding: 15px 0;
  z-index: 999;
  text-align: center;
}

.content {
  p {
    margin-bottom: $spacing-unit;

    a {
      color: $text-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    strong {
      font-weight: bold;
    }
  }

  .router-link {
    color: $text-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
