<template>
  <div class="to-purchase" v-if="currentRouteName === '/'">
    <div>
      Seja bem vindo ao nosso sistema de compra de adesivos
      <br />
      Para efetuar sua compra clique no botão abaixo
    </div>
    <BaseButton class="to-purchase-btn" @click="$emit('route')">
      Comprar adesivos
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class WelcomeMessage extends Vue {
  get currentRouteName() {
    return this.$route.name;
  }
}
</script>

<style scoped>
.to-purchase {
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  font-weight: 500;
  font-size: 30px;
}

.to-purchase-btn {
  margin-top: 10px;
  width: 200px;
}
</style>
