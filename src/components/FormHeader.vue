<template>
  <div class="form-header">
    <span class="form-title">
      <slot name="title"></slot>
    </span>
    <span class="form-subtitle">
      <slot name="subtitle"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormHeader extends Vue {}
</script>

<style scoped>
.form-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-header {
  background-color: var(--main-indigo);
  border-radius: 40px 40px 0 0;

  height: 150px;
  padding: 0px 30px;

  color: var(--main-white);
  font-size: 24px;

  text-align: left;
}

.form-title {
  font-weight: 300;
}

.form-subtitle {
  font-weight: 600;
}
</style>
