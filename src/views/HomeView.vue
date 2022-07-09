<template>
  <div class="checkout-form-wrapper">
    <img alt="bem paggo logo" src="../assets/img/logo-bem-paggo.png" />
    <CheckoutForm msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CheckoutForm from "@/components/CheckoutForm.vue";

@Component({
  components: {
    CheckoutForm,
  },
})
export default class HomeView extends Vue {}
</script>
