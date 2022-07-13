import { mount } from "@vue/test-utils";
import StickersQuantity from "@/components/StickersQuantity.vue";
import store from "@/store";

describe("StickersQuantity.vue", () => {
  store.commit("StickersStore/setStickersQuantity", 2);

  const wrapper = mount(StickersQuantity, {
    store,
    propsData: {
      title: "Adesivos",
    },
  });

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("stickers quantity is 2", () => {
    expect(wrapper.vm.$data.stickersQuantity).toEqual(2);
  });

  test("increase stickers quantity", () => {
    wrapper.find(".plus-icon").trigger("click");
    expect(wrapper.vm.$data.stickersQuantity).toEqual(3);
  });

  test("decrease stickers quantity", () => {
    wrapper.find(".minus-icon").trigger("click");
    wrapper.find(".minus-icon").trigger("click");

    expect(wrapper.vm.$data.stickersQuantity).toEqual(1);
  });
});
