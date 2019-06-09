import { TestWindow } from '@stencil/core/testing';
import { CheetsCharacterAttributes } from './cheets-character-attributes';

describe('cheets-character-attributes', () => {
  it('should build', () => {
    expect(new CheetsCharacterAttributes()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCheetsCharacterAttributesElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheetsCharacterAttributes],
        html: '<cheets-character-attributes></cheets-character-attributes>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
