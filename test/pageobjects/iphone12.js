

const Page = require('./page');

class Iphone12 extends Page{
    get inputBar(){
        return $('//*[@id="site-search"]/div/pwr-search-input/form/input');
    }
    get getText(){
        return $('//a[contains(text(),\'iPhone 12 Pro\')]');
    }
    get ostaNyt()
    {
        return $('//*[@id="textpage-ribbons"]/pwr-ribbon-main/div/section[3]/div/div/div[2]/div[1]/div/pwr-ribbon-wrapper/pwr-static-html/section/div/div[2]/button');
    }
    get selectSilver()
    {
        return $('//*[@id="product-749898962"]/div/swiper/div[2]/div[1]/pwr-product-item-v2/a');

    }
    get buyButton(){
        return $('#product-intro > div.container.old-product-page > div > div > div.col-xs-12.col-md-7 > div > div.product-control > div.buy-area.ng-star-inserted > div.buy-area__webshop > button')
    }
    get selectGuarantee(){
        return $('#cdk-overlay-0 > pwr-add-to-cart-dialog > div > div > div.ac-modal-body.ng-tns-c134-4 > div > div.modal-box.main-box.ng-tns-c134-4 > pwr-product-line > div > div.mt-spacer-mini.mb-spacer-mini.ng-star-inserted > pwr-insurance-selection > pwr-lib-accordion > div > div.p-spacer-basic.ng-star-inserted > div > div > div > div.h-100-p > pwr-lib-button > button > div');
    }
    get toCart(){
        return $('//*[@id="cdk-overlay-0"]/pwr-add-to-cart-dialog/div/div/div[2]/div/div[2]/div/a')

    }
    get removeGuarantee(){
        return $('#basket > div.section-checkout__content > div.section-checkout-basket__rows > pwr-checkout-product-line > div > pwr-checkout-addons > div > div > pwr-insurance-selection > pwr-lib-accordion > div > div.p-spacer-basic > div > div > div > div.h-100-p > pwr-lib-icon-button > button > pwr-lib-icon > i')

    }

    get removeItem(){
        return $('//*[@id="basket"]/div[2]/div[1]/pwr-checkout-product-line/div/div[2]/button')

    }


    async searchForKeyword(keyword){
        // search for keyword in the search bar
        await this.inputBar.setValue(keyword);
        await browser.pause(3000);
        await this.getText.click();
        await browser.pause(3000);

    }
    async addToCart()
    {
        // select buy now button
        await this.ostaNyt.click();
        await browser.pause(5000);
        // switch to parent
        await browser.switchToParentFrame();
        // check if silver card is existing or not to avoid failure
        let exist=await this.selectSilver.isExisting();
        if(exist)
            await this.selectSilver.click(); // so far could not make it works
        else
            await this.open("puhelimet-ja-kamerat/puhelimet/apple-iphone-12-pro-512-gt-hopea/p-1128158/")
        // switch to blue product because grey is out of stock
        const dropdown=await $('//*[@id="product-variants"]/div/div/div/button')
        await dropdown.click()
        const blueColor=await $('//*[@id="product-variants"]/div/div/div/ul/li[1]')
        await blueColor.click()
        await browser.pause(10000);
        //buy + add guarantee package
        await this.buyButton.waitForClickable({ timeout: 5000 });
        await this.buyButton.click();
        await browser.pause(5000);
        await this.selectGuarantee.click();
        await browser.pause(5000);
        // remove item
        await this.toCart.click();
        await this.removeGuarantee.click();
        await browser.pause(5000);
        await this.removeItem.click();
    }




}
module.exports = new Iphone12();
