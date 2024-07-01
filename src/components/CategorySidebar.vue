<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <ul>
        <li>
          <router-link to="/electronics">Electronics</router-link>
        </li>
        <li>
          <router-link to="/clothing">Clothing</router-link>
        </li>
        <li>
          <router-link to="/home-appliances">Home Appliances</router-link>
        </li>
        <li>
          <router-link to="/books">Books</router-link>
        </li>
        <li>
          <router-link to="/sports">Sports</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "CategorySidebar",
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.sidebar {
  background-color: #f4f4f4;
  width: 200px;
  padding: 20px;

  .sidebar-nav {
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 10px;

        router-link {
          text-decoration: none;
          color: #333;
          font-size: 16px;

          &:hover {
            color: #555;
          }
        }
      }
    }
  }
}
</style>
