<template>
  <div class="checkout-page-wrapper">
    <div class="purchase-form-header">
      <span class="purchase-form-title"> Confirmação de compra </span>
    </div>

    <div class="checkout-page-content">
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
          <span class="checkout-page-content-body-item-title">
            Observações:
          </span>
          <span class="checkout-page-content-body-item-value">
            {{ purchase.comments }}
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
    </div>

    <SubmitFooter :page="'checkout'">
      <BaseButton class="send-data-btn" @click="goToRoute('/purchase')">
        Voltar
      </BaseButton>

      <BaseButton class="send-data-btn" @click="goToRoute('/thanks')">
        Comprar
      </BaseButton>
    </SubmitFooter>
  </div>
</template>

<script lang="ts">
import { PurchaseData } from "@/types/PurchaseData";
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";
import SubmitFooter from "@/components/SubmitFooter.vue";

import { namespace } from "vuex-class";

const StickersStore = namespace("StickersStore");

@Component({
  components: {
    BaseButton,
    SubmitFooter,
  },
})
export default class CheckoutPage extends Vue {
  @StickersStore.Getter
  private purchase!: PurchaseData;

  goToRoute(route: string) {
    this.$router.push(route);
  }
}
</script>

<style scoped>
.checkout-page-wrapper {
  width: 40%;
  height: 100%;

  background-color: #f2f2f2;
  border-radius: 40px;
  margin-bottom: 30px;
}

.checkout-page-content {
  padding: 30px;
  font-size: 20px;
  display: flex;
}

.checkout-page-content-body-item {
  text-align: left;
  margin-bottom: 18px;
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

.send-data .send-data-btn {
  margin: 0;
  align-self: center;
}
</style>
