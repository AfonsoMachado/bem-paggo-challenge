import { shallowMount } from "@vue/test-utils";
import CheckoutForm from "@/layout/CheckoutForm.vue";
import BaseCheckboxGroup from "@/components/BaseCheckboxGroup.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";
import StickersQuantity from "@/components/StickersQuantity.vue";

describe("CheckoutForm.vue", () => {
  const wrapper = shallowMount(CheckoutForm);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has components", () => {
    expect(wrapper.findComponent(PaymentMethod).exists()).toBe(true);
    expect(wrapper.findComponent(StickersQuantity).exists()).toBe(true);
    expect(wrapper.findComponent(BaseCheckboxGroup).exists()).toBe(true);
    expect(wrapper.findComponent(BaseTextarea).exists()).toBe(true);
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("Quais adesivos");
    expect(wrapper.html()).toContain("Quantos adesivos de cada");
    expect(wrapper.html()).toContain("Forma de pagamento");
  });

  it("has a send button", () => {
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Enviar");
  });
});
