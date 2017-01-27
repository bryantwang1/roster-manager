import { RosterManagerPage } from './app.po';

describe('roster-manager App', function() {
  let page: RosterManagerPage;

  beforeEach(() => {
    page = new RosterManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
