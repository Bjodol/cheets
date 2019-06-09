import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cheets-label",
  styleUrl: "cheets-label.scss"
})
export class CheetsLabel {
  @Prop() label: string;
  @Prop() subLabel: string;
  render() {
    const { label, subLabel } = this;
    return (
      <label>
        {label}
        <span>{subLabel}</span>
      </label>
    );
  }
}
