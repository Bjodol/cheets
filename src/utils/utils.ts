import { CharacterAbilityScores } from "../components/cheets-character-attributes/cheets-character-attributes";

type argument = string | object;

export function combineClasses(...args: argument[]): string {
  return [...args].reduce((className: string, argument: argument) => {
    if (typeof argument === "object") {
      Object.keys(argument).forEach(key => {
        if (argument[key]) className += ` ${key}`;
      });
      return className;
    } else if (argument) {
      return (className += ` ${argument}`);
    }
  }, "") as string;
}

export const formatFirstLetterUpperCase = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const throwDice = (max: number): number =>
  Math.floor(Math.random() * max) + 1;

export const getModifier = (abilityScore: number) => {
  if (!abilityScore) return 0;
  let modifier = -5;
  for (let i = 1; i <= abilityScore; i++) {
    if (i % 2 === 0) {
      modifier++;
    }
  }
  return modifier;
};

export const calculateModifiers = (
  abilityScores: CharacterAbilityScores
): CharacterAbilityScores => {
  const a = Object.keys(abilityScores).reduce((acc, ability) => {
    const abilityModifier = getModifier(abilityScores[ability].abilityScore);
    const tempModifier = getModifier(abilityScores[ability].tempScore);
    const totalModifier = abilityModifier + tempModifier;
    acc[ability] = {
      ...abilityScores[ability],
      abilityModifier,
      tempModifier,
      totalModifier
    };
    return acc;
  }, {});
  return a;
};
