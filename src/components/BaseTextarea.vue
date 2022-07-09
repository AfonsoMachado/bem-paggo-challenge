<template>
  <div class="base-textarea-panel">
    <div class="form-components-title">{{ title }}</div>
    <textarea
      class="base-textarea-textarea"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :disabled="isDisabled"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseTextarea extends Vue {
  @Prop() value?: string;
  @Prop() title?: string;
  @Prop() placeholder?: string;
  @Prop({ default: false }) isDisabled?: boolean;
}
</script>

<style scoped>
.base-textarea-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

.base-textarea-textarea {
  outline: none;
  width: 100%;
  height: 100px;

  background: #dde3e8;
  border: 1px solid #2f3676;
  box-sizing: border-box;
  border-radius: 6px;
  resize: none;

  color: #495048;
  font-size: var(--font-size-input-field);
  padding: 10px 10px;
}

.base-textarea-textarea:focus {
  border: 1px solid black;
  background: #eff8ff;
}
</style>
