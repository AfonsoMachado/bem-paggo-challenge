<template>
  <div class="base-card-panel" @click="$emit('click')">
    <div v-if="title" class="base-card-header">
      <div class="base-card-header-title">
        {{ title }}
      </div>
      <div class="close" @click="$emit('close')">
        <img src="../assets/img/close-icon.svg" alt="" />
      </div>
    </div>
    <slot name="content"></slot>
    <div class="base-card-footer">
      <div class="button-pay-wrapper">
        <BaseButton class="to-purchase-btn"> Confirmar Pagamento </BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class BaseCard extends Vue {
  @Prop() title?: string;

  @Prop({ default: "300px" }) widthProp!: string;
  @Prop({ default: "200px" }) heightProp!: string;
}
</script>

<style scoped>
.base-card-panel {
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  height: 100%;

  padding: 30px;
}

.base-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  border-bottom: 1px solid #495048;
}

.base-card-header .close {
  cursor: pointer;
}

.base-card-header-title {
  text-align: left;
  font-size: 26px;
}

.base-card-footer > * {
  padding: 10px 0;
}

.button-pay-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
