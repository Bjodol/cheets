import { Component, h, State, Listen } from "@stencil/core";
import { CharacterAbilityScores } from "../cheets-character-attributes/cheets-character-attributes";
import { calculateModifiers } from "../../utils/utils";

@Component({
  tag: "cheets-character-ability-scores",
  styleUrl: "cheets-character-ability-scores.scss"
})
export class CheetsCharacterAbilityScores {
  @State() abilityScores: CharacterAbilityScores;

  @Listen("characterAbilityScoresUpdated")
  calculateNewAbilityScores(event) {
    this.abilityScores = calculateModifiers(event.detail.attributes);
    event.target.attributes = this.abilityScores;
  }

  render() {
    return <slot />;
  }
}
