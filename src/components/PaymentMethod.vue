<template>
  <div class="payment-method-wrapper">
    <div class="form-components-title">{{ title }}</div>
    <div class="payment-method-content">
      <div class="money-method">Dinheiro</div>
      <div class="pix-method">Pix</div>
      <div class="credit-card-method">Cartão de Crédito</div>
      <div class="debit-card-method">Cartão de Débito</div>
      <div class="bank-slip-method">Boleto Bancário</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PaymentMethod extends Vue {
  @Prop() title?: string;
}
</script>

<style scoped></style>
