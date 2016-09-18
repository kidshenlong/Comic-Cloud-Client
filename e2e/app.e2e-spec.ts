import { ComicCloudClientPage } from './app.po';

describe('comic-cloud-client App', function() {
  let page: ComicCloudClientPage;

  beforeEach(() => {
    page = new ComicCloudClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
