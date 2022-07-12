<template>
  <div :class="`send-data`">
    <div :class="`buttons-wrapper ${submitFooterClass}`">
      <slot></slot>
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
export default class SubmitFooter extends Vue {
  @Prop() private page!: "purchase" | "checkout";

  submitFooterClass = "";

  mounted() {
    this.submitFooterClass = `btn-${this.page}`;
  }
}
</script>

<style scoped>
.send-data {
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--background-secondary);
  height: 100px;
  border-radius: 0 0 40px 40px;

  padding: 0px 30px;
}

.send-data button {
  height: 30px;
  width: 100px;

  align-self: flex-end;
}

.buttons-wrapper {
  display: flex;
}

.btn-purchase {
  justify-content: flex-end;
}

.btn-checkout {
  justify-content: space-between;
}
</style>
