/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  CharacterAbilityScores,
} from './components/cheets-character-attributes/cheets-character-attributes';


export namespace Components {
  interface CheetsCard {
    'subtitle': string;
    'title': string;
  }
  interface CheetsCharacterAbilityScores {}
  interface CheetsCharacterAttributes {
    'attributes': CharacterAbilityScores;
    'modifiersDisabled': boolean;
  }
  interface CheetsFieldLabel {}
  interface CheetsLabel {
    'label': string;
    'subLabel': string;
  }
  interface CheetsNumber {
    'disabled': boolean;
    'name': string;
    'round': boolean;
    'size': "normal" | "large";
    'value': number;
  }
}

declare global {


  interface HTMLCheetsCardElement extends Components.CheetsCard, HTMLStencilElement {}
  var HTMLCheetsCardElement: {
    prototype: HTMLCheetsCardElement;
    new (): HTMLCheetsCardElement;
  };

  interface HTMLCheetsCharacterAbilityScoresElement extends Components.CheetsCharacterAbilityScores, HTMLStencilElement {}
  var HTMLCheetsCharacterAbilityScoresElement: {
    prototype: HTMLCheetsCharacterAbilityScoresElement;
    new (): HTMLCheetsCharacterAbilityScoresElement;
  };

  interface HTMLCheetsCharacterAttributesElement extends Components.CheetsCharacterAttributes, HTMLStencilElement {}
  var HTMLCheetsCharacterAttributesElement: {
    prototype: HTMLCheetsCharacterAttributesElement;
    new (): HTMLCheetsCharacterAttributesElement;
  };

  interface HTMLCheetsFieldLabelElement extends Components.CheetsFieldLabel, HTMLStencilElement {}
  var HTMLCheetsFieldLabelElement: {
    prototype: HTMLCheetsFieldLabelElement;
    new (): HTMLCheetsFieldLabelElement;
  };

  interface HTMLCheetsLabelElement extends Components.CheetsLabel, HTMLStencilElement {}
  var HTMLCheetsLabelElement: {
    prototype: HTMLCheetsLabelElement;
    new (): HTMLCheetsLabelElement;
  };

  interface HTMLCheetsNumberElement extends Components.CheetsNumber, HTMLStencilElement {}
  var HTMLCheetsNumberElement: {
    prototype: HTMLCheetsNumberElement;
    new (): HTMLCheetsNumberElement;
  };
  interface HTMLElementTagNameMap {
    'cheets-card': HTMLCheetsCardElement;
    'cheets-character-ability-scores': HTMLCheetsCharacterAbilityScoresElement;
    'cheets-character-attributes': HTMLCheetsCharacterAttributesElement;
    'cheets-field-label': HTMLCheetsFieldLabelElement;
    'cheets-label': HTMLCheetsLabelElement;
    'cheets-number': HTMLCheetsNumberElement;
  }
}

declare namespace LocalJSX {
  interface CheetsCard extends JSXBase.HTMLAttributes<HTMLCheetsCardElement> {
    'subtitle'?: string;
    'title'?: string;
  }
  interface CheetsCharacterAbilityScores extends JSXBase.HTMLAttributes<HTMLCheetsCharacterAbilityScoresElement> {}
  interface CheetsCharacterAttributes extends JSXBase.HTMLAttributes<HTMLCheetsCharacterAttributesElement> {
    'attributes'?: CharacterAbilityScores;
    'modifiersDisabled'?: boolean;
    'onCharacterAbilityScoresUpdated'?: (event: CustomEvent<{
      attributes: CharacterAbilityScores;
    }>) => void;
  }
  interface CheetsFieldLabel extends JSXBase.HTMLAttributes<HTMLCheetsFieldLabelElement> {}
  interface CheetsLabel extends JSXBase.HTMLAttributes<HTMLCheetsLabelElement> {
    'label'?: string;
    'subLabel'?: string;
  }
  interface CheetsNumber extends JSXBase.HTMLAttributes<HTMLCheetsNumberElement> {
    'disabled'?: boolean;
    'name'?: string;
    'onFieldChanged'?: (event: CustomEvent<{
      field: string;
      value: number;
    }>) => void;
    'round'?: boolean;
    'size'?: "normal" | "large";
    'value'?: number;
  }

  interface IntrinsicElements {
    'cheets-card': CheetsCard;
    'cheets-character-ability-scores': CheetsCharacterAbilityScores;
    'cheets-character-attributes': CheetsCharacterAttributes;
    'cheets-field-label': CheetsFieldLabel;
    'cheets-label': CheetsLabel;
    'cheets-number': CheetsNumber;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


