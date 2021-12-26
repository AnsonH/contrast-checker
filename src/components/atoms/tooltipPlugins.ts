// Custom Tippy.js plug-ins
// https://atomiks.github.io/tippyjs/v6/plugins/

import { Plugin } from "tippy.js";

// Hides the tooltip when Escape key is pressed
export const hideOnEsc: Plugin = {
  name: "hideOnEsc",
  defaultValue: true,
  fn(instance) {
    function onKeyDown(event: KeyboardEvent) {
      if (event.code === "Escape") {
        instance.hide();
      }
    }

    return {
      onShow() {
        document.addEventListener("keydown", onKeyDown);
      },
      onHide() {
        document.removeEventListener("keydown", onKeyDown);
      },
    };
  },
};
