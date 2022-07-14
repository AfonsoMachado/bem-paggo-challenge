import { mount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";

const mockTextarea = {
  propsData: {
    label: "value test",
  },
};

describe("BaseInput.vue", () => {
  const wrapper = mount(BaseInput, mockTextarea);
  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("test input type", async () => {
    await wrapper.find("input").setValue("teste");
    expect(wrapper.find("input").element.value).toBe("teste");
  });
});
