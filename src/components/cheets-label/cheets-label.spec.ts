import { TestWindow } from '@stencil/core/testing';
import { CheetsLabel } from './cheets-label';

describe('cheets-label', () => {
  it('should build', () => {
    expect(new CheetsLabel()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCheetsLabelElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheetsLabel],
        html: '<cheets-label></cheets-label>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
