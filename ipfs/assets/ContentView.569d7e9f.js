import { d as defineComponent, r as reactive, a as ref, f as onBeforeMount, c as createElementBlock, t as toDisplayString, e as createCommentVNode, b as createBaseVNode, F as Fragment, u as useRoute, o as openBlock, _ as _export_sfc } from "./index.cf689aa9.js";
import { c as catCID } from "./ipfs.5ff68aef.js";
const _hoisted_1 = {
  key: 0,
  class: "tc"
};
const _hoisted_2 = { class: "page fz-12 c-333 mt-20" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentView",
  setup(__props) {
    const route = useRoute();
    const file = reactive({
      name: "",
      content: ""
    });
    const loading = ref("Loading from IPFS...");
    onBeforeMount(async () => {
      file.content = await catCID(route.params.cid);
      loading.value = "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        loading.value ? (openBlock(), createElementBlock("h5", _hoisted_1, toDisplayString(loading.value), 1)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, toDisplayString(file.content), 1)
      ], 64);
    };
  }
});
const ContentView_vue_vue_type_style_index_0_scoped_8fff461f_lang = "";
const ContentView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8fff461f"]]);
export {
  ContentView as default
};
