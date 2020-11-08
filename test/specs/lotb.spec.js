import LotbPage from '../pageobjects/lotb.page'

describe('List of Tallest Buildings page', () => {
    it('should navigate to the List of Tallest Buildings wiki article', () => {
      browser.url('https://en.wikipedia.org/wiki/List_of_tallest_buildings')
      const expected = "https://en.wikipedia.org/wiki/List_of_tallest_buildings"
      expect(browser).toHaveUrl(expected)
    })

    it('should verify the table of buildings exists', () => {
      const table = LotbPage.sortableTable
      expect(table).toExist()
    })

    it('should verify that the correct building height is displayed based on custom conversion function', () => {
      const feet = LotbPage.feet.getText()
      const actualFeet = feet.replace(',', '')
      const parsedFeet = parseInt(actualFeet)
      const meters = LotbPage.meters.getText()
      const parsedMeters = parseInt(meters)
      const conversion = Math.round(parsedMeters * 3.2808)
      expect(parsedFeet).toEqual(conversion)
    })

    it('should sort by Year', () => {
      const expected = "1931"
      LotbPage.sortClick.click()
      expect(LotbPage.topResultYear.getText()).toEqual(expected)
    })

    it('verifies top result after sorting', () => {
      const expected = "Empire State Building"
      expect(LotbPage.topResult.getText()).toEqual(expected)
    })
})