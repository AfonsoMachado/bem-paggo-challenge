<template>
  <div class="container-base-input">
    <label>{{ label }}</label>
    <input
      class="base-input"
      :type="type"
      :maxlength="maxLength"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseInput extends Vue {
  @Prop({ default: "" }) readonly label!: string;
  @Prop({ default: "text" }) readonly type!: string;
  @Prop({ default: 1000 }) maxLength?: string;
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
