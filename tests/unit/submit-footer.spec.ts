import { mount } from "@vue/test-utils";
import SubmitFooter from "@/components/SubmitFooter.vue";

describe("SubmitFooter.vue", () => {
  const wrapper = mount(SubmitFooter, {
    slots: {
      default: "<div>Hello</div>",
    },
  });

  it("test slot", () => {
    expect(wrapper.find("div").text()).toContain("Hello");
  });
});
