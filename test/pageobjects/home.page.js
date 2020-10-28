import Page from './page'

class FormPage extends Page {
    // Elements go here
    get searchInput () { return $('#searchInput') }
    get searchInputButton () { return $('#searchButton') }
    get suggestionFirst () { return $$('span.highlight')[0] }
    get suggestionSecond () { return $$('span.highlight')[1] }

    // Methods go here
    setSearchText (text) {
        this.searchInput.setValue(text)
    }

    getFirstSuggestion () {
        this.suggestionFirst.getText()
    }

    getSecondSuggestion () {
        this.suggestionSecond.getText()
    }

    clickFirstSuggestion () {
        this.suggestionFirst.click()
    }

    search () {
        this.searchInputButton.click()
    }
}

export default new FormPage()
