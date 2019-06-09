import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cheets-card",
  styleUrl: "cheets-card.scss"
})
export class CheetsCard {
  @Prop() title: string;
  @Prop() subtitle: string;

  render() {
    const { title, subtitle } = this;
    return (
      <div class="card">
        <h2 class="card-title">
          {title} {subtitle && <span class="subtitle">&mdash; {subtitle}</span>}
        </h2>
        <hr />
        <slot />
      </div>
    );
  }
}
