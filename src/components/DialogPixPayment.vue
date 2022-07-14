<template>
  <BaseCard @close="$emit('close')" :title="`Pix`">
    <template v-slot:content>
      <div class="pix-form-content">
        <span>Leia o código abaixo para efetuar o pagamento via pix</span>
        <br />
        <img src="../assets/img/pix-qr.png" alt="" />
      </div>
      <div class="base-card-footer">
        <div class="button-pay-wrapper">
          <BaseButton class="to-purchase-btn" @click="confirmPayment">
            Confirmar Pagamento
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

@Component({ components: { BaseCard, BaseButton, BaseInput } })
export default class DialogBankSlipPayment extends Vue {
  @Prop() title?: string;

  confirmPayment(): void {
    this.$emit("close");
    this.$router.push("/thanks");
  }
}
</script>

<style scoped>
.pix-form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pix-form-content img {
  height: 150px;
}
</style>
