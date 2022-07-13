<template>
  <div class="container-base-input">
    <label class="form-label">{{ label }}</label>
    <input
      class="base-input form-control"
      :class="{ 'is-invalid': hasError }"
      :type="type"
      :value="value"
      v-bind="$attrs"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseInput extends Vue {
  @Prop({ default: "" }) readonly label!: string;
  @Prop({ default: "text" }) readonly type!: string;
  @Prop() value!: string;
  @Prop({ default: false }) hasError?: boolean;
}
</script>

<style scoped>
.container-base-input {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.base-input {
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 12px 20px;
  transition: 0.5s ease;
}

label {
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 5px;
  color: #444;
}
</style>
