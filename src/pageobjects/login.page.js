// import Page from "./page";
// import RetirementCalc from '../testData/RetirmentCalc.json'

const Page = require('./page');
const RetirementCalc = require('../testData/RetirmentCalc.json');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    //a[@id='dsgint-nav-menu-item-1.1']

    /**
     * overwrite specific options to adapt it to page object
     */
     get retireCalcPageLoad () {
        return $('#dsgint-nav-menu-item-1.1');
    }
    get clearForm () {
        return $('//button[text()="Clear form"]');
    }


    async openUrl (urlInput) {
        
        await browser.maximizeWindow();
        await browser.url(urlInput);
        await browser.waitUntil(async function () {
            return await browser.getTitle() == "How Much to Save for Retirement | Securian Financial"
        }, 8000, "Title is not displayed!")
       let title = await browser.getTitle();
       console.log(title + "page is loaded");
       return title
    }
    async closeWindow () {
        console.log("Window Closed");
        await browser.closeWindow();
    }
}

module.exports = new LoginPage();
