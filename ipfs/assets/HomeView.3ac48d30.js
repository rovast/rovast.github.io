import { d as defineComponent, r as reactive, a as ref, c as createElementBlock, b as createBaseVNode, e as createCommentVNode, w as withDirectives, v as vModelText, t as toDisplayString, F as Fragment, o as openBlock } from "./index.f9985f20.js";
import { a as addToIPFS } from "./ipfs.5ff68aef.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h5", { class: "tc" }, "New Paste", -1);
const _hoisted_2 = { class: "fz-12 w-100p" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("td", null, "Content", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_7 = { class: "mt-10" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_9 = { class: "fz-12 pt-10 c-666" };
const _hoisted_10 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props) {
    const form = reactive({
      name: "file.txt",
      content: "Hello world!"
    });
    const preview = ref("");
    const auto_grow = (evt) => {
      const element = evt.target;
      element.style.height = "5px";
      element.style.height = element.scrollHeight + "px";
    };
    const handleClickPublish = async () => {
      const file = await addToIPFS(form.name, form.content);
      preview.value = `https://ipfs.io/ipfs/${file.cid}`;
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
                placeholder: "Hello world!",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.content = $event)
              }, null, 544), [
                [vModelText, form.content]
              ])
            ])
          ]),
          createBaseVNode("tr", null, [
            _hoisted_6,
            createBaseVNode("td", null, [
              createBaseVNode("button", {
                class: "cur-p w-100p",
                onClick: handleClickPublish
              }, " Publish ")
            ])
          ]),
          createBaseVNode("tr", _hoisted_7, [
            _hoisted_8,
            createBaseVNode("td", _hoisted_9, [
              createBaseVNode("i", null, [
                createBaseVNode("a", {
                  href: preview.value,
                  target: "_blank"
                }, toDisplayString(preview.value), 9, _hoisted_10)
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
const HomeView_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
