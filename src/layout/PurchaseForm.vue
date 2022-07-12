<template>
  <div class="form-wrapper">
    <div class="purchase-form-header">
      <span class="purchase-form-title"> Formulário para compra de </span>
      <span class="purchase-form-subtitle"> pacote de adesivos </span>
    </div>
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
        @select="setLocalPaymentMethod"
      />
    </div>

    <SubmitFooter :page="'purchase'">
      <BaseButton class="send-data-btn" @click="sendData"> Enviar </BaseButton>
    </SubmitFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import BaseCheckboxGroup from "@/components/BaseCheckboxGroup.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import StickersQuantity from "@/components/StickersQuantity.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";
import BaseButton from "@/components/BaseButton.vue";
import SubmitFooter from "@/components/SubmitFooter.vue";

import { SelectOption } from "@/types/SelectOption";
import { PurchaseData } from "@/types/PurchaseData";

const StickersStore = namespace("StickersStore");

@Component({
  components: {
    BaseCheckboxGroup,
    BaseTextarea,
    StickersQuantity,
    PaymentMethod,
    BaseButton,
    SubmitFooter,
  },
})
export default class PurchaseForm extends Vue {
  @StickersStore.Mutation
  private setStickersQuantity!: (quantity: number) => void;

  @StickersStore.Mutation
  private setCheckedStickers!: (stickers: string[]) => void;

  @StickersStore.Mutation
  private setPaymentMethod!: (paymentMethod: SelectOption | null) => void;

  @StickersStore.Mutation
  private setComments!: (comments: string) => void;

  @StickersStore.Getter
  private purchase!: PurchaseData;

  checkedStickers: string[] = [];
  stickersQuantity = 0;
  comments = "";
  paymentMethod: SelectOption | null = null;

  checkSticker(checkedStickers: string[]): void {
    this.checkedStickers = checkedStickers;
  }

  setLocalPaymentMethod(payment: SelectOption): void {
    this.paymentMethod = payment;
  }

  sendData(): void {
    if (this.validateForm()) {
      this.setCheckedStickers(this.checkedStickers);
      this.setStickersQuantity(this.stickersQuantity);
      this.setPaymentMethod(this.paymentMethod);
      this.setComments(this.comments);
      this.$router.push("/checkout");
    } else
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

  mounted() {
    this.comments = this.purchase.comments;
    this.paymentMethod = this.purchase.paymentMethod;
    this.stickersQuantity = this.purchase.stickersQuantity;
  }
}
</script>

<style scoped>
.form-wrapper {
  width: 40%;
  height: 100%;

  background-color: #f2f2f2;
  border-radius: 40px;
  margin-bottom: 30px;
}

.form-content {
  padding: 30px 30px 0 30px;
}

.purchase-form-subtitle {
  font-weight: 600;
}

@media screen and (max-width: 767px) {
  .form-wrapper {
    width: 90%;
  }
}
</style>
