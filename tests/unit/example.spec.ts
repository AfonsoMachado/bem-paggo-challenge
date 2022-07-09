import { shallowMount } from "@vue/test-utils";
import CheckoutForm from "@/layout/CheckoutForm.vue";

describe("CheckoutForm.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(CheckoutForm, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
