import Modal from "bootstrap/js/dist/modal";

export default {
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl;
        }
      });
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },

  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
