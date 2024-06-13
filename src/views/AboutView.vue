<template>
  <div class="about-view">
    <h1>About Us</h1>
    <p>
      Welcome to our marketplace! We aim to provide the best products at the
      best prices.
    </p>
    <p>
      Our team is dedicated to ensuring you have the best shopping experience.
      If you have any questions, feel free to reach out to us.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.about-view {
  padding: $spacing-unit * 2;

  h1 {
    font-size: 36px;
    margin-bottom: $spacing-unit;
    color: $primary-color;
  }

  p {
    font-size: 18px;
    color: $dark-color;
    margin-bottom: $spacing-unit;
  }
}
</style>
