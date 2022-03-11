

const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    // so far this website using same xpath for both password and username ?
    get inputValue() {
        return $('//*[@id="form-field-{{label}}"]');
    }

    get loginBtn(){
        return $('#container > pwr-my-power-login-main-input > form > pwr-lib-loader-spinner > pwr-lib-button > button')
    }

    get submit(){
        return $('#container > pwr-my-power-login-password > form > pwr-lib-loader-spinner > pwr-lib-button > button');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async inputUsername (username,password) {
        // enter user name
        await this.inputValue.setValue(username);
        await browser.pause(3000);
        // the login button sometimes didn't work so this help to avoid failure
        let isclickable= await this.loginBtn.isClickable()
        if(isclickable)
        {
            await this.loginBtn.click();
        }

        await browser.pause(10000);
        // if the above step cannot find the email account it avoids failure in clicking submit btn
        isclickable= await this.submit.isClickable()
        if(isclickable)
        {
            console.log("===============>",isclickable)
            await this.submit.click(); // sofar this won't happen
        }

    }



    open() {
        return super.open('mypower/login');
    }
}

module.exports = new LoginPage();
