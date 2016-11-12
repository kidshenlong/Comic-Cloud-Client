import { ComicCloudClientAngular2Page } from './app.po';

describe('comic-cloud-client-angular-2 App', function() {
  let page: ComicCloudClientAngular2Page;

  beforeEach(() => {
    page = new ComicCloudClientAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
