import { mount } from "@vue/test-utils";
import BaseTextarea from "@/components/BaseTextarea.vue";

const mockTextarea = {
  propsData: {
    value: "value test",
    title: "title test",
    placeholder: "placeholder test",
  },
};

describe("BaseTextarea.vue", () => {
  const wrapper = mount(BaseTextarea, mockTextarea);
  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("test texarea", () => {
    expect(wrapper.props().value).toBe("value test");
    expect(wrapper.props().placeholder).toBe("placeholder test");
    expect(wrapper.props().title).toBe("title test");
  });
});
