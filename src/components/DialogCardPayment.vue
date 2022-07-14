<template>
  <BaseCard @close="$emit('close')" :title="`Cartão de ${cardType}`">
    <template v-slot:content>
      <div class="card-form-content">
        <BaseInput
          :label="'Número do cartão'"
          :maxLength="'16'"
          v-model="cardData.number"
        ></BaseInput>
        <BaseInput
          :label="'Nome impresso no cartão'"
          v-model="cardData.name"
        ></BaseInput>
        <div class="valid-card">
          <BaseInput
            :label="'Validade'"
            :maxLength="'5'"
            v-model="cardData.expiration"
          ></BaseInput>
          <BaseInput
            :label="'Código de segurança'"
            :maxLength="'3'"
            v-model="cardData.cvv"
          ></BaseInput>
        </div>
        <BaseInput
          :label="'CPF'"
          :maxLength="'11'"
          v-model="cardData.cpf"
        ></BaseInput>
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
export default class DialogCardPayment extends Vue {
  @Prop() title?: string;
  @Prop() cardType?: string;

  cardData = {
    number: "",
    name: "",
    expiration: "",
    cvv: "",
    cpf: "",
  };

  objectHasNullValues() {
    return Object.values(this.cardData).some((value) => value === "");
  }

  confirmPayment() {
    if (!this.objectHasNullValues()) {
      this.$emit("close");
      this.$router.push("/thanks");
    } else {
      this.$swal.fire({
        icon: "warning",
        title: "Preencha todos os campos necessários",
      });
    }
  }
}
</script>

<style scoped>
.valid-card {
  display: flex;
  justify-content: space-between;
}

.container-base-input {
  margin-top: 5px;
}

.valid-card .container-base-input {
  width: 49%;
}
</style>
