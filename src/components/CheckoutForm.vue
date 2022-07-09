<template>
  <div class="hello">
    <BaseCheckboxGroup @check="checkSticker" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseCheckboxGroup from "@/components/BaseChechboxGroup.vue";

@Component({
  components: {
    BaseCheckboxGroup,
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
