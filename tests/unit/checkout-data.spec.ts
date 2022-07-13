import { mount } from "@vue/test-utils";
import store from "@/store";
import CheckoutData from "@/components/CheckoutData.vue";

describe("CheckoutData.vue", () => {
  // Povoando store
  store.commit("StickersStore/setComments", "teste comment");
  store.commit("StickersStore/setCheckedStickers", ["React", "Vue"]);
  store.commit("StickersStore/setStickersQuantity", 2);
  store.commit("StickersStore/setPaymentMethod", {
    label: "Cartão de crédito",
    value: "credit-card",
  });

  const wrapper = mount(CheckoutData, { store });

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("test checkout data content", () => {
    expect(wrapper.text()).toContain("teste comment");
    expect(wrapper.text()).toContain("React");
    expect(wrapper.text()).toContain("Vue");
    expect(wrapper.text()).toContain("2");
    expect(wrapper.text()).toContain("Cartão de crédito");
  });
});
