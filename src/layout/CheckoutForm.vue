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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseCheckboxGroup from "@/components/BaseChechboxGroup.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import StickersQuantity from "@/components/StickersQuantity.vue";

@Component({
  components: {
    BaseCheckboxGroup,
    BaseTextarea,
    StickersQuantity,
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
}
</style>
