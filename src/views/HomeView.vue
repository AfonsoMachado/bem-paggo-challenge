<template>
  <div class="checkout-form-wrapper">
    <img
      alt="bem-paggo-logo"
      class="bem-paggo-logo"
      src="../assets/img/logo-bem-paggo.png"
      @click="goRoRoute('/')"
    />
    <router-view />
    <div class="to-purchase">
      <button
        class="to-purchase-btn"
        v-if="currentRouteName === '/'"
        @click="goRoRoute('/purchase')"
      >
        Comprar adesivos
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PurchaseForm from "@/layout/PurchaseForm.vue";

@Component({
  components: {
    PurchaseForm,
  },
})
export default class HomeView extends Vue {
  get currentRouteName() {
    return this.$route.name;
  }

  goRoRoute(route: string) {
    this.$router.push(route);
  }
}
</script>

<style scoped>
.checkout-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkout-form-wrapper .bem-paggo-logo {
  width: 450px;
  max-width: 100%;
  cursor: pointer;
}

.to-purchase-btn {
  width: 100%;
  height: 30px;
}
</style>
