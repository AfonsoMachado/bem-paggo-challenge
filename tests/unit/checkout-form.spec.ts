import { mount } from "@vue/test-utils";
import PurchaseForm from "@/layout/PurchaseForm.vue";
import BaseCheckboxGroup from "@/components/BaseCheckboxGroup.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";
import StickersQuantity from "@/components/StickersQuantity.vue";
import store from "@/store";
import FormWrapper from "@/components/FormWrapper.vue";
import FormHeader from "@/components/FormHeader.vue";
import SubmitFooter from "@/components/SubmitFooter.vue";
import BaseButton from "@/components/BaseButton.vue";

describe("PurchaseForm.vue", () => {
  const wrapper = mount(PurchaseForm, { store });

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has components", () => {
    expect(wrapper.findComponent(PaymentMethod).exists()).toBe(true);
    expect(wrapper.findComponent(StickersQuantity).exists()).toBe(true);
    expect(wrapper.findComponent(BaseCheckboxGroup).exists()).toBe(true);
    expect(wrapper.findComponent(BaseTextarea).exists()).toBe(true);
    expect(wrapper.findComponent(FormWrapper).exists()).toBe(true);
    expect(wrapper.findComponent(FormHeader).exists()).toBe(true);
    expect(wrapper.findComponent(SubmitFooter).exists()).toBe(true);
    expect(wrapper.findComponent(BaseButton).exists()).toBe(true);
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("Formulário para compra");
    expect(wrapper.html()).toContain("Quais adesivos");
    expect(wrapper.html()).toContain("Quantos adesivos de cada");
    expect(wrapper.html()).toContain("Forma de pagamento");
    expect(wrapper.html()).toContain("Observações");
  });

  it("has a send button", () => {
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Enviar");
  });
});
