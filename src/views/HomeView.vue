<template>
  <div class="checkout-form-wrapper">
    <img
      alt="bem-paggo-logo"
      class="bem-paggo-logo"
      src="../assets/img/logo-bem-paggo.png"
      @click="goRoRoute('/')"
    />
    <router-view />
    <WelcomeMessage @route="goRoRoute('/purchase')" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import WelcomeMessage from "@/components/WelcomeMessage.vue";

const StickersStore = namespace("StickersStore");

@Component({
  components: {
    WelcomeMessage,
  },
})
export default class HomeView extends Vue {
  @StickersStore.Mutation
  private resetStore!: () => void;

  goRoRoute(route: string) {
    this.$route.name !== route && this.$router.push(route);
  }

  beforeUpdate() {
    this.$route.name === "/" && this.resetStore();
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
</style>
