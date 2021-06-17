// Custom Tippy.js plug-ins
// https://atomiks.github.io/tippyjs/v6/plugins/

// Hides the tooltip when Escape key is pressed
export const hideOnEsc = {
  name: "hideOnEsc",
  defaultValue: true,
  fn(instance) {
    function onKeyDown(event) {
      // Escape key is pressed
      if (event.keyCode === 27) {
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
