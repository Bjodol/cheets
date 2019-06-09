import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { combineClasses } from "../../utils/utils";

@Component({
  tag: "cheets-number",
  styleUrl: "cheets-number.scss"
})
export class CheetsNumber {
  @Prop() name: string;
  @Prop() value: number;
  @Prop() round: boolean = false;
  @Prop() size: "normal" | "large" = "normal";
  @Prop() disabled: boolean = false;

  @Event() fieldChanged: EventEmitter<{
    field: string;
    value: number;
  }>;

  render() {
    const { size, round, value, fieldChanged, name, disabled } = this;
    return (
      <input
        type="number"
        value={value}
        disabled={disabled}
        class={combineClasses(size, { round })}
        onInput={ev =>
          fieldChanged.emit({ field: name, value: parseFloat(ev.target.value) })
        }
      />
    );
  }
}
