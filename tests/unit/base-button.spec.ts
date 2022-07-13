import { mount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

const mockTextarea = {
  propsData: {
    value: "value test",
    title: "title test",
    placeholder: "placeholder test",
  },
};

describe("BaseButton.vue", () => {
  const wrapper = mount(BaseButton, mockTextarea);
  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("test button click", () => {
    const emitted = wrapper.emitted();

    wrapper.find("button").trigger("click");
    expect(emitted.click).toBeTruthy();
  });
});
