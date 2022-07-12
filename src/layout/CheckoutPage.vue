<template>
  <FormWrapper>
    <FormHeader>
      <template v-slot:title>Confirmação de compra</template>
    </FormHeader>

    <div class="form-content">
      <CheckoutData />
    </div>

    <SubmitFooter :page="'checkout'">
      <BaseButton class="send-data-btn" @click="goToRoute('/purchase')">
        Voltar
      </BaseButton>

      <BaseButton class="send-data-btn" @click="goToRoute('/thanks')">
        Comprar
      </BaseButton>
    </SubmitFooter>
  </FormWrapper>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";
import SubmitFooter from "@/components/SubmitFooter.vue";
import FormHeader from "@/components/FormHeader.vue";
import FormWrapper from "@/components/FormWrapper.vue";
import CheckoutData from "@/components/CheckoutData.vue";

@Component({
  components: {
    BaseButton,
    SubmitFooter,
    FormHeader,
    FormWrapper,
    CheckoutData,
  },
})
export default class CheckoutPage extends Vue {
  goToRoute(route: string) {
    this.$router.push(route);
  }
}
</script>

<style scoped>
.checkout-page-content {
  padding: 30px;
  display: flex;
}

.send-data .send-data-btn {
  align-self: center;
}
</style>
