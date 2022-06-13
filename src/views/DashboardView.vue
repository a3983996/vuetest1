<template>
  <!-- As a link -->
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (!token) {
      this.$router.push("/login");
    }
    this.$http.defaults.headers.common["Authorization"] = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((res) => {
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>