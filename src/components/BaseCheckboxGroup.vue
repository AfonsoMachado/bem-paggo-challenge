<template>
  <div class="checkbox-group">
    <div class="form-components-title checkbox-group-title">{{ title }}</div>
    <div class="checkbox-group-wrapper">
      <div class="checkbox-group-items">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { StickersOptions } from "@/utils/Constants";
import { PurchaseData } from "@/types/PurchaseData";

const StickersStore = namespace("StickersStore");

@Component
export default class BaseCheckboxGroup extends Vue {
  @StickersStore.Getter
  private purchase!: PurchaseData;

  @Prop() title?: string;

  stickersOptions: string[] = StickersOptions;
  checkedStickers: string[] = [];

  @Watch("checkedStickers")
  emitChangeEvent(): void {
    this.$emit("check", this.checkedStickers);
  }

  mounted() {
    this.checkedStickers = this.purchase.checkedStickers;
  }
}
</script>

<style scoped>
.checkbox-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.checkbox-group-title {
  align-self: flex-start;
}

.checkbox-group-wrapper {
  width: 100%;
}

.checkbox-group-items {
  max-height: 150px;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-self: flex-start;
}

.checkbox-group-items .checkbox-wrapper {
  display: flex;
  margin: 10px 0;
}
</style>
