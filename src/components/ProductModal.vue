<template>
  <div
    class="modal fade container"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增產品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-4">
                <div class="mb-3">
                  <label for="exampleInputText1" class="form-label"
                    >輸入圖片網址</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputText1"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputFile1" class="form-label"
                    >或 上傳圖片</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputFile1"
                    ref="fileInput"
                    @change="uploadFile"
                  />
                </div>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-outline-primary">
                    新增圖片
                  </button>
                </div>
              </div>
              <div class="col-8">
                <div class="mb-3">
                  <label for="exampleInputText2" class="form-label">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputText2"
                    v-model="tempProduct.title"
                  />
                </div>
                <div class="row">
                  <div class="mb-3 col">
                    <label for="exampleInputText3" class="form-label"
                      >分類</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText3"
                      v-model="tempProduct.category"
                    />
                  </div>
                  <div class="mb-3 col">
                    <label for="exampleInputText4" class="form-label"
                      >單位</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText4"
                      v-model="tempProduct.unit"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col">
                    <label for="exampleInputText3" class="form-label"
                      >原價</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputText3"
                      v-model="tempProduct.origin_price"
                    />
                  </div>
                  <div class="mb-3 col">
                    <label for="exampleInputText4" class="form-label"
                      >售價</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputText4"
                      v-model="tempProduct.price"
                    />
                  </div>
                </div>
                <div class="mb-3 col">
                  <label for="textarea1" class="form-label">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="textarea1"
                    v-model="tempProduct.description"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="textarea2" class="form-label">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="textarea2"
                    v-model="tempProduct.content"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', tempProduct)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from "@/mixins/modalMixin";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  mixins: [modalMixin],
};
</script>