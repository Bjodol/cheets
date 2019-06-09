import { TestWindow } from '@stencil/core/testing';
import { CheetsFieldLabel } from './cheets-field-label';

describe('cheets-field-label', () => {
  it('should build', () => {
    expect(new CheetsFieldLabel()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCheetsFieldLabelElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheetsFieldLabel],
        html: '<cheets-field-label></cheets-field-label>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
