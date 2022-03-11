/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    get cookieBtn(){
        // return $('//*[@id="coiPage-1"]/div[2]/div[1]/button[3]');
        return $('//*[@id="declineButton"]');
    }

    async acceptCookies(){
        // the cookie modal is hidden and shown by changing CSS style
        // using aria-hidden attribute we can know when it's visible or not
        const cookieModal=await $('#coiOverlay')
        const att=await cookieModal.getAttribute('aria-hidden')
        if (att == 'false')
        {
            // if it blocking the screen turn the cookie off
            await this.cookieBtn.click();
        }
    }
    open(path="") {
        return browser.url(`https://www.power.fi/${path}`)
    }
}
