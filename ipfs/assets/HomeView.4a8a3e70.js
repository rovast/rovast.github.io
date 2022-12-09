import { d as defineComponent, r as reactive, a as ref, c as createElementBlock, b as createBaseVNode, e as createCommentVNode, w as withDirectives, v as vModelText, t as toDisplayString, F as Fragment, o as openBlock } from "./index.cf689aa9.js";
import { a as addToIPFS } from "./ipfs.5ff68aef.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h5", { class: "tc" }, "New Paste", -1);
const _hoisted_2 = {
  class: "fz-12",
  style: { "max-width": "600px", "margin": "20px auto" }
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("td", null, "Content", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_7 = {
  key: 1,
  class: "cur-p w-100p",
  disabled: ""
};
const _hoisted_8 = {
  key: 0,
  class: "tc fz-12 c-666"
};
const _hoisted_9 = ["href"];
const _hoisted_10 = { class: "mt-10" };
const _hoisted_11 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props) {
    const form = reactive({
      name: "file.txt",
      content: ""
    });
    const previewLocal = ref("");
    const previewIPFS = ref("");
    const loading = ref(false);
    const auto_grow = (evt) => {
      const element = evt.target;
      element.style.height = "5px";
      element.style.height = element.scrollHeight + "px";
    };
    const handleClickPublish = async () => {
      loading.value = true;
      const file = await addToIPFS(form.name, form.content);
      loading.value = false;
      previewLocal.value = `${window.location.href}${file.cid}`;
      previewIPFS.value = `https://ipfs.io/ipfs/${file.cid}`;
    };
    const copy = (text) => {
      window.navigator.clipboard.writeText(text);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("table", _hoisted_2, [
          createCommentVNode("", true),
          createBaseVNode("tr", null, [
            _hoisted_5,
            createBaseVNode("td", null, [
              withDirectives(createBaseVNode("textarea", {
                onInput: auto_grow,
                class: "w-100p",
                rows: "10",
                placeholder: "Paste here.",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.content = $event)
              }, null, 544), [
                [vModelText, form.content]
              ])
            ])
          ]),
          createBaseVNode("tr", null, [
            _hoisted_6,
            createBaseVNode("td", null, [
              !loading.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                class: "cur-p w-100p",
                onClick: handleClickPublish
              }, " Publish ")) : (openBlock(), createElementBlock("button", _hoisted_7, "Publishing"))
            ])
          ])
        ]),
        previewLocal.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("div", null, [
            createBaseVNode("i", null, [
              createBaseVNode("a", {
                href: previewLocal.value,
                target: "_blank"
              }, toDisplayString(previewLocal.value), 9, _hoisted_9)
            ]),
            createBaseVNode("button", {
              class: "p-0 ml-10",
              onClick: _cache[2] || (_cache[2] = ($event) => copy(previewLocal.value))
            }, "Copy")
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("i", null, [
              createBaseVNode("a", {
                href: previewIPFS.value,
                target: "_blank"
              }, toDisplayString(previewIPFS.value), 9, _hoisted_11),
              createBaseVNode("button", {
                class: "p-0 ml-10",
                onClick: _cache[3] || (_cache[3] = ($event) => copy(previewIPFS.value))
              }, "Copy")
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const HomeView_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
