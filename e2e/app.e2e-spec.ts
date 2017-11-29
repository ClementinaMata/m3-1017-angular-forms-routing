import { AngularFormsRoutingServicePage } from './app.po';

describe('angular-forms-routing-service App', () => {
  let page: AngularFormsRoutingServicePage;

  beforeEach(() => {
    page = new AngularFormsRoutingServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
