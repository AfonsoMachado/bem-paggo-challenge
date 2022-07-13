<template>
  <div class="checkout-page-content-body">
    <div class="checkout-page-content-body-item">
      <span class="checkout-page-content-body-item-title">
        Pacote de adesivos:
      </span>
      <span class="checkout-page-content-body-item-value">
        <span v-for="(item, index) in purchase.checkedStickers" :key="index"
          >{{ item }},
        </span>
      </span>
    </div>

    <div class="checkout-page-content-body-item">
      <span class="checkout-page-content-body-item-title">
        Quantidade por adesivos:
      </span>
      <span class="checkout-page-content-body-item-value">
        {{ purchase.stickersQuantity }}
      </span>
    </div>

    <div class="checkout-page-content-body-item" v-if="purchase.comments">
      <span class="checkout-page-content-body-item-title"> Observações: </span>
      <span class="checkout-page-content-body-item-value">
        {{ purchase.comments }}
      </span>
    </div>
    <div class="checkout-page-content-body-item payment">
      <span class="checkout-page-content-body-item-title"> Valor total: </span>
      <span class="checkout-page-content-body-item-value payment">
        {{ totalPrice }}
      </span>
    </div>
    <div class="checkout-page-content-body-item payment">
      <span class="checkout-page-content-body-item-title">
        Forma de pagamento:
      </span>
      <span class="checkout-page-content-body-item-value payment">
        {{ purchase.paymentMethod.label }}
        <img
          :src="require(`@/assets/img/${purchase.paymentMethod.value}.png`)"
          :alt="`${purchase.paymentMethod.label}`"
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { PurchaseData } from "@/types/PurchaseData";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const StickersStore = namespace("StickersStore");

const pricePerSticker = 1.5;

@Component
export default class CheckoutData extends Vue {
  @StickersStore.Getter
  private purchase!: PurchaseData;

  get totalPrice(): string {
    const totalPrice =
      this.purchase.checkedStickers.length *
      this.purchase.stickersQuantity *
      pricePerSticker;

    return totalPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
}
</script>

<style scoped>
.checkout-page-content-body-item {
  text-align: left;
  margin-bottom: 18px;
  font-size: 20px;
}

.checkout-page-content-body-item img {
  height: 30px;
}

.checkout-page-content-body-item-title {
  font-weight: 600;
}

.checkout-page-content-body-item-value.payment,
.checkout-page-content-body-item.payment {
  display: flex;
  align-items: center;
}

.checkout-page-content-body-item-value.payment,
.checkout-page-content-body-item-value.payment img {
  margin-left: 5px;
}
</style>
