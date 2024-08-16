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
        <router-link to="/terms-of-service">Terms of Service</router-link> |
        <router-link to="/list-of-authorized-users"
          >List of authorized users</router-link
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  components: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.footer {
  background-color: $primary-color-LightGray;
  color: $text-color;
  padding: 20px 0;
  .content {
    max-width: 800px;
    margin: 0 auto;
    .centered-block {
      text-align: center;
      p {
        margin: 10px 0;
        a {
          color: #ffdd57;
          &:hover {
            color: lighten(#ffdd57, 10%);
          }
        }
      }
    }
  }
}
</style>
