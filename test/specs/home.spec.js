import HomePage from '../pageobjects/home.page'

describe('Wikipedia home page',  () => {
    it('should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page', () => {
        browser.url('https://en.wikipedia.org')

        const expected = "https://en.wikipedia.org/wiki/Main_Page"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
    })

    it('should allow the user to search and display results', () => {
        const searchText = "world's tallest building"
        HomePage.setSearchText(searchText)
        browser.waitUntil(() => $('.suggestions').isDisplayed() === true)
    })

    it('should show a dropdown of suggested results', () => {
        const expectedFirstSuggestion = "World's Tallest Building"
        const expectedSecondSuggestion = "World's tallest buildings"

        HomePage.getFirstSuggestion() === expectedFirstSuggestion
        HomePage.getSecondSuggestion() === expectedSecondSuggestion
    })

    it('clicks the first suggested result and verifies new url', () => {
        const expected = "https://en.wikipedia.org/wiki/List_of_tallest_buildings"
        HomePage.clickFirstSuggestion()
        browser.waitUntil(() => $('#firstHeading').getText() === "List of tallest buildings")
        browser.getUrl() === expected
    })
})
