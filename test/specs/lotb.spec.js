import lotbPage from '../pageobjects/lotb.page'
import LotbPage from '../pageobjects/lotb.page'

describe('List of Tallest Buildings page', () => {
    it('should navigate to the List of Tallest Buildings wiki article', () => {
      browser.url('https://en.wikipedia.org/wiki/List_of_tallest_buildings')
      const expected = "https://en.wikipedia.org/wiki/List_of_tallest_buildings"
      browser.getUrl() === expected
      expect(browser).toHaveUrl(expected)
    })

    it('should verify the table of buildings exists', () => {
      LotbPage.verifyTable() === true
    })
    it('should verify that the correct building height is displayed based on custom conversion function', () => {
      const meters = LotbPage.getHeightMeters()
      const feet = 2073
      const conversion = Math.round(meters * 3.2808)
      LotbPage.getHeightFeet() === feet
      // LotbPage.getHeightMeters() === meters


      browser.pause(100000)
      expect(conversion).toEqual(feet)




    })
    it('should sort by Year', () => {
      LotbPage.sortListText() === 'Year'
      LotbPage.sortListClick()
    })

    it('verifies top result after sorting', () => {
      const topResult = LotbPage.firstBuilding()
      const expected = "Empire State Building"
      browser.pause(1000)
      expect(topResult).toEqual(expected)
    })
})