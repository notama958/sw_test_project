const screenShot = require("../screenshot/capture");
const ChatBot = require('../pageobjects/chatbot');
const Iphone12=require("../pageobjects/iphone12");
const Iphone13=require("../pageobjects/iphone13");
const LoginPage = require('../pageobjects/login.page');

screenShot;
describe('Powerfi Test Suite', () => {
    var originalTimeout;
    // before each test set the longer timeout unless it fail during the addToCart() action
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it('should search for iphone12 pro and add to cart', async () => {
        await Iphone12.open();
        await Iphone12.acceptCookies();
        await browser.maximizeWindow();
        await browser.pause(5000);
        await Iphone12.searchForKeyword('iphone12 pro');
        await browser.pause(5000);
        await Iphone12.addToCart();
        await browser.pause(5000);
        await screenShot('iphone12')
    });

});
describe('chat bot', () => {
    it('Open chatbot and fill out the form', async () => {
        await ChatBot.open();
        await ChatBot.acceptCookies();
        await browser.maximizeWindow();
        await browser.pause(5000);
        await ChatBot.fillForm('yen','yen@gmail.com');
        await screenShot('chatbox')
    });

});
describe('Iphone 13 pro', () => {
    it('should search for iphone13 pro then iphone12 pro', async () => {
        await Iphone13.open();
        await Iphone13.acceptCookies();
        await browser.pause(5000);
        await Iphone13.searchForKeyword('iphone13 pro');
        await browser.pause(5000);
        await Iphone13.gotoMainPage();
        await browser.pause(5000);
        await Iphone13.searchForKeyword('iphone12 pro');
        await browser.pause(5000);
        await screenShot('iphone13')
        await browser.pause(5000);

    });
});
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.acceptCookies();
        await browser.pause(5000);
        await LoginPage.inputUsername('yen.o.tran@tuni.fi', 'SuperSecretPassword!');
        await browser.pause(5000);
        await screenShot("login")
        await browser.pause(5000);

    });


});
