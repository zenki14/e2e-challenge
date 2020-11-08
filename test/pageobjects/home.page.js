import Page from './page'

class HomePage extends Page {
    // Elements go here
    get searchInput () { return $('#searchInput') }
    get searchInputButton () { return $('#searchButton') }
    get suggestionFirst () { return $('body > div.suggestions:nth-child(12) > div.suggestions-results:nth-child(1) > a.mw-searchSuggest-link:nth-child(1) > div.suggestions-result') }
    get suggestionSecond () { return $('body > div.suggestions:nth-child(12) > div.suggestions-results:nth-child(1) > a.mw-searchSuggest-link:nth-child(2) > div.suggestions-result') }

    // Methods go here
    setSearchText (text) {
        this.searchInput.setValue(text)
    }

    search () {
        this.searchInputButton.click()
    }
}

export default new HomePage()
