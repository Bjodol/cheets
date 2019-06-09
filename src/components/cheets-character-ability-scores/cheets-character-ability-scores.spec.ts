import { TestWindow } from '@stencil/core/testing';
import { CheetsCharacterAbilityScores } from './cheets-character-ability-scores';

describe('cheets-character-ability-scores', () => {
  it('should build', () => {
    expect(new CheetsCharacterAbilityScores()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCheetsCharacterAbilityScoresElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheetsCharacterAbilityScores],
        html: '<cheets-character-ability-scores></cheets-character-ability-scores>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
