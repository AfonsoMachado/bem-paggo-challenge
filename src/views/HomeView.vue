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
      <BaseButton
        class="to-purchase-btn"
        v-if="currentRouteName === '/'"
        @click="goRoRoute('/purchase')"
      >
        Comprar adesivos
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import PurchaseForm from "@/layout/PurchaseForm.vue";
import BaseButton from "@/components/BaseButton.vue";

const StickersStore = namespace("StickersStore");

@Component({
  components: {
    PurchaseForm,
    BaseButton,
  },
})
export default class HomeView extends Vue {
  @StickersStore.Mutation
  private resetStore!: () => void;

  get currentRouteName() {
    return this.$route.name;
  }

  goRoRoute(route: string) {
    this.$route.name !== route && this.$router.push(route);
  }

  mounted() {
    this.resetStore();
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
  width: 200px;
}
</style>
