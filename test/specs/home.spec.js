import HomePage from '../pageobjects/home.page'


describe('Wikipedia home page',  () => {
    it('should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page', () => {
        browser.url('https://en.wikipedia.org')
        const urlValue = browser.getUrl()
        const expected = "https://en.wikipedia.org/wiki/Main_Page"
        expect(urlValue).toEqual(expected)
    })

    it('should allow the user to search and display results', () => {
        const searchText = "world's tallest building"
        HomePage.setSearchText(searchText)
        expect(HomePage.suggestionFirst).toBePresent()
    })

    it('should show a dropdown of suggested results', () => {
        const expectedFirstSuggestion = "World's Tallest Building"
        const expectedSecondSuggestion = "World's tallest buildings"
        const first = HomePage.suggestionFirst.getText()
        const second = HomePage.suggestionSecond.getText()
      
        expect(first).toEqual(expectedFirstSuggestion)
        expect(second).toEqual(expectedSecondSuggestion)
    })

    it('clicks the first suggested result and verifies new url', () => {
        const expectedNow = "https://en.wikipedia.org/wiki/List_of_tallest_buildings"
        HomePage.suggestionFirst.click()
        browser.waitUntil(() => $('#firstHeading').getText() === "List of tallest buildings")
        const urlValue = browser.getUrl()
        expect(urlValue).toEqual(expectedNow)
  })
})