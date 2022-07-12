<template>
  <div class="payment-method-wrapper">
    <div class="form-components-title">{{ title }}</div>
    <div class="payment-method-content">
      <div
        class="payment-item"
        :id="index"
        :class="
          selectedPaymentMethod && selectedPaymentMethod.value === item.value
            ? 'selected'
            : ''
        "
        v-for="(item, index) in paymentMethods"
        :key="index"
        @click="selectPaymentMethod(item)"
      >
        <img
          :src="require(`@/assets/img/${item.value}.png`)"
          :alt="`${item.label}`"
        />
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { PaymentMethods } from "@/utils/Constants";
import { SelectOption } from "@/types/SelectOption";
import { PurchaseData } from "@/types/PurchaseData";

const StickersStore = namespace("StickersStore");

@Component
export default class PaymentMethod extends Vue {
  @StickersStore.Getter
  private purchase!: PurchaseData;

  @Prop() title?: string;

  paymentMethods: SelectOption[] = PaymentMethods;
  selectedPaymentMethod: SelectOption | null = null;

  selectPaymentMethod(payment: SelectOption) {
    this.selectedPaymentMethod = payment;
    this.$emit("select", payment);
  }

  mounted() {
    this.selectedPaymentMethod = this.purchase.paymentMethod;
  }
}
</script>

<style scoped>
.payment-method-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.payment-method-wrapper .form-components-title {
  align-self: flex-start;
}

.payment-method-wrapper img {
  height: 30px;
  margin-bottom: 5px;
}

.payment-method-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 90%;
}

.payment-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  cursor: pointer;
  margin: 5px 5px;
  padding: 4px;

  border-radius: 5px;
  box-shadow: 0 0 1em #ccc;

  font-weight: 500;
  font-size: 14px;

  transition: box-shadow 0.3s ease-in-out;
}

.payment-item.selected {
  box-shadow: 0 0 1em #2f3676;
}

.payment-item:hover {
  box-shadow: 0 0 1em #2f3676;
  transition: box-shadow 0.2s ease-in-out;
}
</style>
