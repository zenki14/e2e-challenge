import Page from './page'

class EsbPage extends Page {
    // Elements go here
    get precededByLink () { return $('#mw-content-text > div.mw-parser-output > table:nth-child(4) > tbody > tr:nth-child(5) > td > a') }
    get surpassedByLink () { return $('#mw-content-text > div.mw-parser-output > table:nth-child(4) > tbody > tr:nth-child(6) > td > a') }
    get magnify () { return $$('div.thumbcaption > div.magnify') }
    get thumbCaption () { return $$('div.thumbcaption') }
    
    // Methods go here
}

export default new EsbPage()
