<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/dashboard/products" class="nav-link"
            >產品</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/products" class="nav-link"
            >訂單</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/products" class="nav-link"
            >優惠券</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="logout">登出</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>