<template>
  <BaseCard @close="$emit('close')" :title="`Cartão de ${cardType}`">
    <template v-slot:content>
      <div class="card-form-content">
        <BaseInput :label="'Número do cartão'"></BaseInput>
        <BaseInput :label="'Nome impresso no cartão'"></BaseInput>
        <div class="valid-card">
          <BaseInput :label="'Validade'"></BaseInput>
          <BaseInput :label="'Código de segurança'"></BaseInput>
        </div>
        <BaseInput :label="'CPF'"></BaseInput>
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
export default class DialogCardPayment extends Vue {
  @Prop() title?: string;
  @Prop() cardType?: string;
}
</script>

<style scoped>
.valid-card {
  display: flex;
}
</style>
