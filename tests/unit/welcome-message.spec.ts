import { mount } from "@vue/test-utils";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import router from "@/router";

describe("WelcomeMessage.vue", () => {
  const wrapper = mount(WelcomeMessage, {
    router,
    slots: {
      default: "<div>Hello</div>",
    },
  });

  it("has as button", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("has a text", () => {
    expect(wrapper.find("div").html()).toContain(
      "Seja bem vindo ao nosso sistema de compra de adesivos"
    );
    expect(wrapper.find("div").html()).toContain(
      "Para efetuar sua compra clique no botão abaixo"
    );
  });

  it("click button", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted().route).toBeTruthy();
  });
});
