<template>
  <div :class="`send-data ${submitFooterClass}`">
    <slot></slot>
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

  background-color: #dde3e8;
  height: 100px;
  border-radius: 0 0 40px 40px;

  padding: 0px 30px;
}

.send-data button {
  height: 30px;
  width: 100px;

  align-self: flex-end;
}

.btn-purchase {
  flex-direction: column;
  justify-content: center;
}

.btn-checkout {
  flex-direction: row;
  justify-content: space-between;
}
</style>
