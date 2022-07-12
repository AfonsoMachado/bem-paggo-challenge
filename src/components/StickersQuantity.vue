<template>
  <div class="stickers-quantity-wrapper">
    <div class="form-components-title stickers-quantity-title">
      <span>{{ title }}</span>
    </div>
    <div class="stickers-quantity-content">
      <img
        src="../assets/img/minus.png"
        alt="minus-icon"
        class="minus-icon"
        @click="decreaseStickersQuantity"
      />
      <input
        class="stickers-quantity-input"
        type="number"
        disabled
        :value="stickersQuantity"
      />
      <img
        src="../assets/img/plus.png"
        alt="plus-icon"
        class="plus-icon"
        @click="increaseStickersQuantity"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PurchaseData } from "@/types/PurchaseData";
import { namespace } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";

const StickersStore = namespace("StickersStore");

@Component
export default class StickersQuantity extends Vue {
  @StickersStore.Getter
  private purchase!: PurchaseData;

  @Prop() title?: string;

  stickersQuantity = 0;

  increaseStickersQuantity(): void {
    this.stickersQuantity++;
    this.emitChangedStickersQuantity();
  }

  decreaseStickersQuantity(): void {
    if (this.stickersQuantity > 0) {
      this.stickersQuantity--;
      this.emitChangedStickersQuantity();
    }
  }

  emitChangedStickersQuantity(): void {
    this.$emit("input", this.stickersQuantity);
  }

  mounted() {
    this.stickersQuantity = this.purchase.stickersQuantity;
  }
}
</script>

<style scoped>
.stickers-quantity-content,
.stickers-quantity-wrapper {
  display: flex;
}

.stickers-quantity-wrapper {
  flex-direction: column;
  margin-bottom: 20px;
}

.stickers-quantity-title {
  align-self: flex-start;
}

.stickers-quantity-content input {
  margin: 0 7px;
  width: 50px;
  border-radius: 8px;
  border: 1px solid var(--main-indigo);
}

.stickers-quantity-content img {
  height: 25px;
  cursor: pointer;
}
</style>
