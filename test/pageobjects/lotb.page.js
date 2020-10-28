import Page from './page'

class FormPage extends Page {
    // Elements go here
    get sortableTable () { return $('table.wikitable.sortable') }
    get sortClick () { return $('table.wikitable.sortable > thead > tr > th')[8] }

    // Methods go here
    verifyTable () {
        this.sortableTable.isExisting()
    }

    sortList () {
      this.sortClick.click()
    }
}

export default new FormPage()
