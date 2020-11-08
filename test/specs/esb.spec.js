import EsbPage from '../pageobjects/esb.page'

describe('Empire State Building page', () => {
  it('Navigates to page', () => {
    browser.url('https://en.wikipedia.org/wiki/Empire_State_Building')
  })
  it('verifies Preceeded by Link', () => {
    expect(EsbPage.precededByLink.getAttribute('href')).toEqual('/wiki/Chrysler_Building')
  })
  it('verifies Surpassed by Link', () => {
    expect(EsbPage.surpassedByLink.getAttribute('href')).toEqual('/wiki/World_Trade_Center_(1973%E2%80%932001)')
  })
  it('checks icon', () => {
    const elem = EsbPage.thumbCaption
    expect(EsbPage.thumbCaption.length).toEqual(EsbPage.magnify.length)
  })
})