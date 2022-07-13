<template>
  <BaseCard @close="$emit('close')" :title="`Pix`">
    <template v-slot:content>
      <span>Leia o código abaixo para efetuar o pagamento via pix</span>
      <br />
      <div class="pix-form-content">
        <img src="../assets/img/pix-qr.png" alt="" />
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
}
</script>

<style scoped>
.pix-form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.pix-form-content img {
  height: 150px;
}
</style>
