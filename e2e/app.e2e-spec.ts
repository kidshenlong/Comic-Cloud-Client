import { ComicCloudPage } from './app.po';

describe('comic-cloud App', function() {
  let page: ComicCloudPage;

  beforeEach(() => {
    page = new ComicCloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
