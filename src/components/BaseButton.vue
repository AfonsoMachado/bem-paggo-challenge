<template>
  <button class="send-data-btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {}
</script>

<style scoped>
button {
  text-transform: uppercase;
  background-color: var(--main-indigo);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;

  opacity: 1;
  transition: opacity 0.3s ease;

  height: 30px;
}

button:hover {
  opacity: 0.7;
  transition-delay: 0s, 0s, 0.1s;
}

button:active {
  opacity: 1;
}
</style>
