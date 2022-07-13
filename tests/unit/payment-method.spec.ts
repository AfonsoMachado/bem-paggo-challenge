import { mount } from "@vue/test-utils";
import store from "@/store";
import PaymentMethod from "@/components/PaymentMethod.vue";
import { PaymentMethods } from "@/utils/Constants";

const mockPaymentMethod = {
  store,
  propsData: {
    title: "title test",
  },
  data() {
    return {
      paymentMethods: PaymentMethods,
    };
  },
};
describe("PaymentMethod.vue", () => {
  const wrapper = mount(PaymentMethod, mockPaymentMethod);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("test payment mwethod title", () => {
    expect(wrapper.props().title).toBe("title test");
    expect(wrapper.find(".form-components-title").text()).toBe("title test");
  });

  test("test payment method exists", () => {
    expect(wrapper.vm.$data.paymentMethods).toEqual(PaymentMethods);
  });

  test("payment method click", async () => {
    wrapper.find(".payment-item").trigger("click");
    await wrapper.vm.$nextTick();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const selectEvent = wrapper.emitted().select!;

    expect(selectEvent).toBeTruthy();
    expect(selectEvent.length).toBe(1);
    expect(selectEvent[0]).toMatchObject([
      {
        label: "Boleto Bancário",
        value: "boleto",
      },
    ]);
  });
});
