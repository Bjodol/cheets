import { Component, h } from "@stencil/core";

@Component({
  tag: "cheets-field-label",
  styleUrl: "cheets-field-label.scss"
})
export class CheetsFieldLabel {
  render() {
    return (
      <label>
        <slot />
      </label>
    );
  }
}
