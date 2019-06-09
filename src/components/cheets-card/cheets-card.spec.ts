import { TestWindow } from '@stencil/core/testing';
import { CheetsCard } from './cheets-card';

describe('cheets-card', () => {
  it('should build', () => {
    expect(new CheetsCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCheetsCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheetsCard],
        html: '<cheets-card></cheets-card>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
