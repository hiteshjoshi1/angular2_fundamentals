import { FundamentalsPage } from './app.po';

describe('fundamentals App', () => {
  let page: FundamentalsPage;

  beforeEach(() => {
    page = new FundamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
