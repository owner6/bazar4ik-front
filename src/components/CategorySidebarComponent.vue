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
.sidebar {
  background-color: #f5f5f5;
  padding: 20px;
  border-right: 1px solid #e5e5e5;
  height: 100vh;
  position: fixed;
  width: 200px;
  overflow-y: auto;
}

.sidebar-nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar-nav ul li {
  margin: 10px 0;
}

.sidebar-nav ul li a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.sidebar-nav ul li a:hover {
  text-decoration: underline;
}
</style>
