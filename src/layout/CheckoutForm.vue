<template>
  <div class="form-wrapper">
    <BaseCheckboxGroup @check="checkSticker" :title="'Quais adesivos:'" />
    <StickersQuantity
      v-model="stickersQuantity"
      :title="'Quantos adesivos de cada?'"
    />
    <BaseTextarea
      :title="'Observações'"
      :placeholder="'Alguma dúvida? Recado?'"
      v-model="comments"
    />
    <PaymentMethod :title="'Forma de pagamento:'" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseCheckboxGroup from "@/components/BaseChechboxGroup.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import StickersQuantity from "@/components/StickersQuantity.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";

@Component({
  components: {
    BaseCheckboxGroup,
    BaseTextarea,
    StickersQuantity,
    PaymentMethod,
  },
})
export default class CheckoutForm extends Vue {
  @Prop() private msg!: string;

  checkedStickers: string[] = [];
  stickersQuantity = 0;
  comments = "";

  checkSticker(checkedStickers: string[]): void {
    this.checkedStickers = checkedStickers;
  }
}
</script>

<style scoped>
.form-wrapper {
  width: 40%;
  height: 100%;

  background-color: #f2f2f2;
  border-radius: 2em;
  padding: 30px;
  margin-bottom: 30px;
}

@media screen and (max-width: 767px) {
  .form-wrapper {
    width: 90%;
  }
}
</style>
