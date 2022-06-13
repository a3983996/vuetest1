<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        </li>
      </ul>
  </div>
</nav>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default{
  data() {
    return{
    };
  }
}
</script>

<style lang="scss">
@import "./assets/all";
</style>
