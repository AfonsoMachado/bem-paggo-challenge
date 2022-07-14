<template>
  <BaseCard @close="$emit('close')" :title="`Boleto Bancário`">
    <template v-slot:content>
      <div class="card-form-content">
        <span>Pague seu boleto usando o código abaixo</span>
        <br />
        <div class="bank-slip-wrapper">
          <span @click="copyToClipboard"> Copiar código </span>

          <span id="bank-slip-number"
            >34191.23454 61234.456789 156489.324657 6 489156324156</span
          >
        </div>
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
import { Component, Vue } from "vue-property-decorator";
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

@Component({ components: { BaseCard, BaseButton, BaseInput } })
export default class DialogBankSlipPayment extends Vue {
  copyToClipboard(): void {
    const copyText = document.getElementById("bank-slip-number") as HTMLElement;
    navigator.clipboard.writeText(copyText.innerHTML);

    this.$swal.fire({
      title: "Código copiado para a área de transferência",
      icon: "success",
    });
  }

  confirmPayment(): void {
    this.$emit("close");
    this.$router.push("/thanks");
  }
}
</script>

<style scoped>
.card-form-content,
.bank-slip-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bank-slip-wrapper {
  width: 100%;
  border-radius: 5px;
  background-color: var(--main-indigo);
  color: var(--main-white);
  padding-top: 10px;
}

.bank-slip-wrapper span:nth-child(1) {
  cursor: pointer;
  text-decoration: underline;
}

#bank-slip-number {
  border-top: 1px solid var(--main-white);
  padding-top: 10px;
  margin: 10px 0;
  font-family: sans-serif;
}
</style>
