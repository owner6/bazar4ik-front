<template>
  <footer class="footer">
    <div class="content has-text-centered">
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
  display: flex;
  justify-content: center;
  background-color: $dark-color;
  color: $light-color;
  font-family: $font-family;
  position: fixed;
  bottom: 0;
  width: 1440px;
  margin: 0 auto;
  padding-top: 15px;
  justify-content: center;

  .content {
    max-width: 100%;

    p {
      margin-bottom: $spacing-unit;
      font-size: 14px;

      a {
        color: $primary-color;
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
      color: $primary-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
