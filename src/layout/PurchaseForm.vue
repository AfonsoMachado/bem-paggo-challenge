<template>
  <div class="form-wrapper">
    <div class="form-content">
      <BaseCheckboxGroup @check="checkSticker" :title="'Quais adesivos:'" />
      <StickersQuantity
        v-model="stickersQuantity"
        :title="'Quantos adesivos de cada?'"
      />
      <BaseTextarea
        :title="'Observações'"
        :placeholder="'Alguma dúvida? Recado?'"
        v-model="comments"
      />
      <PaymentMethod
        :title="'Forma de pagamento:'"
        @select="setPaymentMethod"
      />
    </div>

    <div class="send-data">
      <button class="send-data-btn" @click="sendData">Enviar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseCheckboxGroup from "@/components/BaseCheckboxGroup.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import StickersQuantity from "@/components/StickersQuantity.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";
import { SelectOption } from "@/types/SelectOption";

@Component({
  components: {
    BaseCheckboxGroup,
    BaseTextarea,
    StickersQuantity,
    PaymentMethod,
  },
})
export default class PurchaseForm extends Vue {
  checkedStickers: string[] = [];
  stickersQuantity = 0;
  comments = "";
  paymentMethod: SelectOption | null = null;

  checkSticker(checkedStickers: string[]): void {
    this.checkedStickers = checkedStickers;
  }

  setPaymentMethod(payment: SelectOption): void {
    this.paymentMethod = payment;
  }

  sendData(): void {
    const checkoutData = {
      stickers: this.checkedStickers,
      quantity: this.stickersQuantity,
      comments: this.comments,
      paymentMethod: this.paymentMethod,
    };

    console.log(checkoutData);

    if (this.validateForm()) this.$router.push("/checkout");
    else
      this.$swal.fire({
        icon: "warning",
        title: "Preencha todos os campos necessários",
      });
  }

  validateForm(): boolean {
    return this.checkedStickers.length !== 0 &&
      this.stickersQuantity !== 0 &&
      this.paymentMethod !== null
      ? true
      : false;
  }
}
</script>

<style scoped>
.form-wrapper {
  width: 40%;
  height: 100%;

  background-color: #f2f2f2;
  border-radius: 2em;
  margin-bottom: 30px;
}

.form-content {
  padding: 30px 30px 0 30px;
}

.send-data {
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100px;
  background-color: #dde3e8;

  border-radius: 0 0 2em 2em;
}

.send-data button {
  height: 30px;
  width: 100px;

  align-self: flex-end;
  margin-right: 50px;
}

@media screen and (max-width: 767px) {
  .form-wrapper {
    width: 90%;
  }
}
</style>
