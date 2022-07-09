import { mount } from "@vue/test-utils";
import BaseTextarea from "@/components/BaseTextarea.vue";

describe("BaseTextarea.vue", () => {
  const wrapper = mount(BaseTextarea);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
