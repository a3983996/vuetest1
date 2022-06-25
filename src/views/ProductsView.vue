<template>
  <!-- <Vue3Loading :active="isLoading"></Vue3Loading> -->
  <LoadingComponent :active="isLoading"></LoadingComponent>

  <div class="text-d">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加產品
    </button>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="120">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.width">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDelProductModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationComponent
    :pages="pagination"
    @emit-pages="getProducts"
  ></PaginationComponent>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  >
  </ProductModal>
  <ToastMessages></ToastMessages>
  <DelProductModal
    ref="delProductModal"
    :product="tempProduct"
    @delete-product="deleteProduct"
  ></DelProductModal>
</template>

<script>
import ProductModal from "@/components/ProductModal.vue";
import ToastMessages from "@/components/ToastMessages.vue";
import DelProductModal from "@/components/DelProductModal.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
  inject: ["emitter", "pushMessagesState"],
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    ToastMessages,
    DelProductModal,
    PaginationComponent,
    LoadingComponent,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }

      const productComponent = this.$refs.productModal;
      productComponent.hideModal();
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.getProducts();
        }
        this.pushMessagesState(res, this.isNew ? "新增" : "編輯");
      });
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delProductComponent = this.$refs.delProductModal;
      delProductComponent.showModal();
    },
    deleteProduct(item) {
      this.tempProduct = item;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      const delProductComponent = this.$refs.delProductModal;
      delProductComponent.hideModal();
      this.isLoading = true;
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.getProducts();
        }
        this.pushMessagesState(res, "刪除");
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
</style>