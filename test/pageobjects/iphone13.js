

const Page = require('./page');

class Iphone13 extends Page{
    get inputBar(){
        return $('//*[@id="site-search"]/div/pwr-search-input/form/input');
    }
    get searchIcon(){
        return $('//*[@id="site-search"]/div/pwr-search-input/form/button/i')
    }
    get icon(){
        return $('//*[@id="page-header-logo"]');
    }

    async searchForKeyword(keyword){
        // search by keyword with search bar
        await this.inputBar.setValue(keyword);
        await browser.pause(3000);
        await this.searchIcon.click();
        await browser.pause(3000);

    }
    async gotoMainPage(){
        // go to main page by clicking logo button
        await this.icon.click();
    }


}
module.exports = new Iphone13();
