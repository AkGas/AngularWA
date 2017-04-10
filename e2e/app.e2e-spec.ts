import { ProjTNPXLPage } from './app.po';

describe('proj-tnpxl App', function() {
  let page: ProjTNPXLPage;

  beforeEach(() => {
    page = new ProjTNPXLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
