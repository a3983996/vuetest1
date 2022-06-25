<template>
  <div class="background1"></div>
  <LoadingComponent :active="isLoading"></LoadingComponent>
</template>

<script>
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    LoadingComponent,
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    // this.isLoading = false;
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.background1 {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: url("../assets/background1.jpg")
    rgba($color: #f28d44, $alpha: 0.2) no-repeat center center;
  background-size: cover;
}
</style>
