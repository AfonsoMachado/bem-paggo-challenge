<template>
  <BaseCard @close="$emit('close')" :title="`Boleto Bancário`">
    <template v-slot:content>
      <div class="card-form-content">
        <span>Pague seu boleto usando o código abaixo</span>
        <br />
        <span>34191.23454 61234.456789 156489.324657 6 489156324156</span>
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
.valid-card {
  display: flex;
}
</style>
