import Page from './page'

class LotbPage extends Page {
    // Elements go here
    get sortableTable () { return $('table.wikitable.sortable') }
    get sortClick () { return $('table.wikitable.sortable.jquery-tablesorter:nth-child(25) > thead:nth-child(1) > tr:nth-child(1) > th.headerSort:nth-child(8)') }
    get topResult () { return $('table.wikitable.sortable.jquery-tablesorter:nth-child(25) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)') }
    get topResultYear () { return $('#mw-content-text > div.mw-parser-output > table:nth-child(25) > tbody > tr:nth-child(1) > td:nth-child(9)') }
    get feet () { return $('table.wikitable.sortable.jquery-tablesorter:nth-child(25) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(7)') }
    get meters () { return $('table.wikitable.sortable.jquery-tablesorter:nth-child(25) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6)') }

    // Methods go here
    verifyTable () {
        this.sortableTable.isExisting()
    }

    getHeightFeet () {
        this.feet.getText()
    }

    getHeightMeters () {
        this.meters.scrollIntoView()
        console.log(this.meters.getValue())
        this.meters.getValue()
    }

    sortListText () {
        this.sortClick.getText()
    }

    sortListClick () {
        this.sortClick.click()
    }

    firstBuilding () {
        this.topResult.getText()
    }
}

export default new LotbPage()
