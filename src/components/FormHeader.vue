<template>
  <div class="form-header">
    <div class="form-header-text">
      <span class="form-title">
        <slot name="title"></slot>
      </span>
      <br />
      <span class="form-subtitle">
        <slot name="subtitle"></slot>
      </span>
    </div>
    <div class="form-header-img">
      <img src="../assets/img/box.svg" alt="" />
    </div>
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
  flex-direction: row;
  justify-content: space-between;

  overflow: hidden;
}

.form-header {
  background-color: var(--main-indigo);
  border-radius: 40px 40px 60% 40%;

  height: 200px;
  padding: 0px 30px;

  color: var(--main-white);
  font-size: 24px;

  text-align: left;
}

.form-header-text {
  align-self: center;
}

.form-header-img {
  margin-top: 10px;
}

.form-title {
  font-weight: 300;
}

.form-subtitle {
  font-weight: 600;
}
</style>
