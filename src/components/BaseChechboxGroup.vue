<template>
  <div class="checkbox-group">
    <div
      class="checkbox-wrapper"
      v-for="(item, index) in stickersOptions"
      :key="index"
    >
      <input
        type="checkbox"
        :id="index"
        :value="item"
        v-model="checkedStickers"
      />
      <label :for="index">{{ item }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { StickersOptions } from "@/utils/Constants";

@Component
export default class BaseCheckboxGroup extends Vue {
  stickersOptions: string[] = StickersOptions;
  checkedStickers: string[] = [];

  @Watch("checkedStickers")
  emitChangeEvent(): void {
    this.$emit("check", this.checkedStickers);
  }
}
</script>

<style scoped></style>
