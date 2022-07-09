<template>
  <div class="hello">
    <BaseCheckboxGroup @check="checkSticker" />
    <BaseTextarea :title="'Observações'" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseCheckboxGroup from "@/components/BaseChechboxGroup.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";

@Component({
  components: {
    BaseCheckboxGroup,
    BaseTextarea,
  },
})
export default class CheckoutForm extends Vue {
  @Prop() private msg!: string;

  checkedStickers: string[] = [];

  checkSticker(checkedStickers: string[]): void {
    this.checkedStickers = checkedStickers;
  }
}
</script>

<style scoped></style>
