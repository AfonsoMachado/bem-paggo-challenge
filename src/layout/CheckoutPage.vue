<template>
  <FormWrapper>
    <FormHeader>
      <template v-slot:title>Confirmação de compra</template>
    </FormHeader>

    <div class="form-content">
      <CheckoutData />
    </div>
    <SubmitFooter :page="'checkout'">
      <BaseButton @click="goToRoute('/purchase')"> Voltar </BaseButton>
      <BaseButton @click="selectPayment"> Comprar </BaseButton>
    </SubmitFooter>
  </FormWrapper>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import BaseButton from "@/components/BaseButton.vue";
import SubmitFooter from "@/components/SubmitFooter.vue";
import FormHeader from "@/components/FormHeader.vue";
import FormWrapper from "@/components/FormWrapper.vue";
import CheckoutData from "@/components/CheckoutData.vue";
import DialogCardPayment from "@/components/DialogCardPayment.vue";
import DialogBankSlipPayment from "@/components/DialogBankSlipPayment.vue";
import DialogPixPayment from "@/components/DialogPixPayment.vue";
import { PurchaseData } from "@/types/PurchaseData";

const StickersStore = namespace("StickersStore");

@Component({
  components: {
    BaseButton,
    SubmitFooter,
    FormHeader,
    FormWrapper,
    CheckoutData,
    DialogCardPayment,
    DialogBankSlipPayment,
    DialogPixPayment,
  },
})
export default class CheckoutPage extends Vue {
  @StickersStore.Getter
  private purchase!: PurchaseData;

  goToRoute(route: string) {
    this.$router.push(route);
  }

  selectPayment(): void {
    if (this.purchase.paymentMethod?.value === "credit-card") {
      this.$modal.show(
        DialogCardPayment,
        {
          cardType: "Crédito",
        },
        {
          name: "dialog-cancel-request",
          height: "auto",
          // width: window.innerWidth >= 1000 ? "912px" : "80%",
        }
      );
    } else if (this.purchase.paymentMethod?.value === "boleto") {
      this.$modal.show(
        DialogBankSlipPayment,
        {},
        {
          name: "dialog-cancel-request",
          height: "auto",
          // width: window.innerWidth >= 1000 ? "912px" : "80%",
        }
      );
    } else if (this.purchase.paymentMethod?.value === "pix") {
      this.$modal.show(
        DialogPixPayment,
        {},
        {
          name: "dialog-cancel-request",
          height: "auto",
          // width: window.innerWidth >= 1000 ? "912px" : "80%",
        }
      );
    } else if (this.purchase.paymentMethod?.value === "debit-card") {
      this.$modal.show(
        DialogCardPayment,
        {
          cardType: "Débito",
        },
        {
          name: "dialog-cancel-request",
          height: "auto",
          // width: window.innerWidth >= 1000 ? "912px" : "80%",
        }
      );
    }
  }
}
</script>

<style scoped>
.checkout-page-content {
  padding: 30px;
  display: flex;
}
</style>
