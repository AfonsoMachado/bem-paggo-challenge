<template>
  <div class="base-textarea-panel">
    <div class="base-textarea-title">{{ title }}</div>
    <textarea
      class="base-textarea-textarea"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :rows="rows"
      :disabled="isDisabled"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseTextarea extends Vue {
  @Prop() value?: string;
  @Prop() title?: string;
  @Prop({ default: false }) isDisabled?: boolean;

  @Prop({ default: 3 }) rows?: number;
}
</script>

<style scoped>
.base-textarea-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
}

.base-textarea-textarea {
  outline: none;
  width: 100%;

  background: #f9f9f9;
  border: 1px solid #b4b4b4;
  box-sizing: border-box;
  border-radius: 6px;
  resize: none;

  color: #495048;
  font-size: var(--font-size-input-field);
  padding: 10px 10px;

  font-family: "Poppins", sans-serif;
}

.base-textarea-title {
  color: #000;
  padding-left: 10px;
  margin-bottom: 8px;
  font-weight: 400;
}

.base-textarea-textarea:focus {
  border: 1px solid black;
  background: #ffffff;
}
</style>
