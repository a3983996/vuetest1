<template>
  <Vue3Loading :active="isLoading"></Vue3Loading>
  <form @submit.prevent="signIn">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        autocomplete="on"
        class="form-control"
        v-model="user.username"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        autocomplete="on"
        class="form-control"
        v-model="user.password"
        id="exampleInputPassword1"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      isLoading: false,
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};
           expires=${new Date(expired)}`;
          this.$router.push("/dashboard/products");
        }
      });
    },
  },
};
</script>