import { TestWindow } from '@stencil/core/testing';
import { CheetsNumber } from './cheets-number';

describe('cheets-number', () => {
  it('should build', () => {
    expect(new CheetsNumber()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCheetsNumberElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheetsNumber],
        html: '<cheets-number></cheets-number>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
