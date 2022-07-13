import { mount } from "@vue/test-utils";
import FormHeader from "@/components/FormHeader.vue";

describe("FormHeader.vue", () => {
  const wrapper = mount(FormHeader, {
    slots: {
      title: "header title",
      subtitle: "header subtitle",
    },
  });

  it("has a title and a subtitle", () => {
    expect(wrapper.text()).toContain("header title");
    expect(wrapper.text()).toContain("header subtitle");
  });

  it("test image exists", () => {
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBeTruthy();
  });
});
