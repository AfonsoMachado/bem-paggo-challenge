<template>
  <div class="thanks-page-wrapper">
    <span> Muito obrigado por sua compra! </span>
    <router-link to="/">Ir para a página inicial</router-link>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ThanksPage extends Vue {}
</script>

<style>
.thanks-page-wrapper {
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  font-weight: 500;
}

.thanks-page-wrapper a {
  color: var(--main-indigo);
}
</style>
