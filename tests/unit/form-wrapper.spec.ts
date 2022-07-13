import { mount } from "@vue/test-utils";
import FormWrapper from "@/components/FormWrapper.vue";

describe("FormWrapper.vue", () => {
  const wrapper = mount(FormWrapper, {
    slots: {
      default: "<div>Hello</div>",
    },
  });

  it("has a title and a subtitle", () => {
    expect(wrapper.find("div").text()).toContain("Hello");
  });
});
