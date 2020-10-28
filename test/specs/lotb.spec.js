import LotbPage from '../pageobjects/lotb.page'

describe('List of Tallest Buildings page', () => {
    it('should navigate to the List of Tallest Buildings wiki article', () => {
      browser.url('https://en.wikipedia.org/wiki/List_of_tallest_buildings')
      const expected = "https://en.wikipedia.org/wiki/List_of_tallest_buildings"
      browser.getUrl() === expected
    })

    it('should verify the table of buildings exists', () => {
      LotbPage.verifyTable() === true
    })
})