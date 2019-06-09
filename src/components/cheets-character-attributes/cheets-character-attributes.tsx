import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { throwDice } from "../../utils/utils";

export interface CharacterAbilityScores {
  [key: string]: {
    abilityScore: number;
    abilityModifier: number;
    tempScore?: number;
    tempModifier?: number;
    totalModifier: number;
  };
}
@Component({
  tag: "cheets-character-attributes",
  styleUrl: "cheets-character-attributes.scss"
})
export class CheetssCharacterAttributes {
  @Prop() modifiersDisabled: boolean = true;
  @Prop() attributes: CharacterAbilityScores = {
    strength: {
      abilityScore: throwDice(20),
      abilityModifier: throwDice(20),
      tempScore: throwDice(20),
      tempModifier: throwDice(20),
      totalModifier: throwDice(20)
    },
    dexterity: {
      abilityScore: throwDice(20),
      abilityModifier: throwDice(20),
      tempScore: throwDice(20),
      tempModifier: throwDice(20),
      totalModifier: throwDice(20)
    },
    constitution: {
      abilityScore: throwDice(20),
      abilityModifier: throwDice(20),
      tempScore: throwDice(20),
      tempModifier: throwDice(20),
      totalModifier: throwDice(20)
    },
    intelligence: {
      abilityScore: throwDice(20),
      abilityModifier: throwDice(20),
      tempScore: throwDice(20),
      tempModifier: throwDice(20),
      totalModifier: throwDice(20)
    },
    wisdom: {
      abilityScore: throwDice(20),
      abilityModifier: throwDice(20),
      tempScore: throwDice(20),
      tempModifier: throwDice(20),
      totalModifier: throwDice(20)
    },
    charisma: {
      abilityScore: throwDice(20),
      abilityModifier: throwDice(20),
      tempScore: throwDice(20),
      tempModifier: throwDice(20),
      totalModifier: throwDice(20)
    }
  };

  @Event() characterAbilityScoresUpdated: EventEmitter<{
    attributes: CharacterAbilityScores;
  }>;

  render() {
    const { attributes, characterAbilityScoresUpdated } = this;

    return (
      <div>
        <label />
        <cheets-field-label>Ability Score</cheets-field-label>
        <cheets-field-label>Ability Mod</cheets-field-label>
        <cheets-field-label>Temp Score</cheets-field-label>
        <cheets-field-label>Temp Mod</cheets-field-label>
        <cheets-field-label>
          Total <br /> Mod
        </cheets-field-label>
        {Object.keys(attributes).map(key => {
          return [
            <cheets-label label={key.substring(0, 3)} subLabel={key} />,
            Object.keys(attributes[key]).map(attribute => {
              const isSum = !!attribute.match(/(t|T)otal/);
              const isModifer = !!attribute.match(/(m|M)od/) && !isSum;
              return (
                <cheets-number
                  name={attribute}
                  value={attributes[key][attribute]}
                  size={isSum ? "large" : "normal"}
                  disabled={isModifer}
                  onFieldChanged={ev => {
                    characterAbilityScoresUpdated.emit({
                      attributes: {
                        ...attributes,
                        [key]: {
                          ...attributes[key],
                          [attribute]: ev.detail.value
                        }
                      }
                    });
                  }}
                  round={isSum}
                />
              );
            })
          ];
        })}
      </div>
    );
  }
}
