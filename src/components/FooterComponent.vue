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

<style lang="scss">
.footer {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e5e5e5;
}

.footer .content {
  max-width: 800px;
  margin: 0 auto;
}

.footer a {
  color: #42b983;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
