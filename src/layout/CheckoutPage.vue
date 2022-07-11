<template>
  <div class="checkout-page-wrapper">
    <div class="purchase-form-header">
      <span class="purchase-form-title"> Confirmação de compra </span>
    </div>

    teste

    <div class="send-data">
      <button class="send-data-btn" @click="sendData">Comprar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CheckoutPage extends Vue {}
</script>

<style scoped>
.checkout-page-wrapper {
  width: 40%;
  height: 100%;

  background-color: #f2f2f2;
  border-radius: 2em;
  margin-bottom: 30px;
}

.checkout-page-content {
  padding: 30px 30px 0 30px;
}
</style>
