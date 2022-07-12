<template>
  <div class="form-wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormWrapper extends Vue {}
</script>

<style scoped>
.form-wrapper {
  width: 40%;
  height: 100%;

  background-color: var(--background-primary);
  border-radius: 40px;
  margin-bottom: 30px;
}

@media screen and (max-width: 767px) {
  .form-wrapper {
    width: 90%;
  }
}
</style>
