import { d as defineComponent, r as reactive, a as ref, f as onBeforeMount, c as createElementBlock, b as createBaseVNode, t as toDisplayString, F as Fragment, u as useRoute, o as openBlock } from "./index.f9985f20.js";
import { c as catCID } from "./ipfs.5ff68aef.js";
const _hoisted_1 = { class: "tc" };
const _hoisted_2 = { class: "fz-12 c-666" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentView",
  setup(__props) {
    const route = useRoute();
    const file = reactive({
      name: "",
      content: ""
    });
    const loading = ref("Loading...");
    onBeforeMount(async () => {
      file.content = await catCID(route.params.cid);
      loading.value = "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h5", _hoisted_1, toDisplayString(loading.value), 1),
        createBaseVNode("div", _hoisted_2, toDisplayString(file.content), 1)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
