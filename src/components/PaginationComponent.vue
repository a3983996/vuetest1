<template>
  <ul class="pagination justify-content-center">
    <li class="page-item" v-if="pages.has_pre">
      <a
        class="page-link"
        href="#"
        @click.prevent="$emit('emit-pages', pages.current_page - 1)"
        >&#171;</a
      >
    </li>
    <li
      class="page-item"
      v-for="page in pages.total_pages"
      :key="page"
      :class="{ active: page === pages.current_page }"
    >
      <a
        class="page-link"
        href="#"
        @click.prevent="$emit('emit-pages', page)"
        >{{ page }}</a
      >
    </li>
    <li class="page-item" v-if="pages.has_next">
      <a
        class="page-link"
        href="#"
        @click.prevent="$emit('emit-pages', pages.current_page + 1)"
        >&#187;</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: ["pages"],
};
</script>