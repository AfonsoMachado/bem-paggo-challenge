import { mount } from "@vue/test-utils";
import BaseCheckboxGroup from "@/components/BaseCheckboxGroup.vue";
import { StickersOptions } from "../../src/utils/Constants";
import store from "@/store";

const mockCheckboxGroup = {
  store,
  propsData: {
    title: "title test",
  },
  data() {
    return {
      stickersOptions: StickersOptions,
    };
  },
};

describe("BaseCheckboxGroup.vue", () => {
  const wrapper = mount(BaseCheckboxGroup, mockCheckboxGroup);
  console.log(wrapper.html());
  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("test checkbox group title", () => {
    expect(wrapper.props().title).toBe("title test");
  });

  test("test checkbox group options", () => {
    expect(wrapper.vm.$data.stickersOptions).toEqual(StickersOptions);
  });
});
