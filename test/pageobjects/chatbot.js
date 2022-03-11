

const Page = require('./page');

class ChatBot extends Page{

    async fillForm (username, em){
        // click chatbot
        const chatbox=await $('body > div.web > section > button')
        await chatbox.click();
        await browser.pause(10000)
        //input name
        const name=await $('#enteredFormName')
        await name.setValue(username);
        // input email
        const email=await $('#enteredChatId')
        await email.setValue(em);
        //select dropdown list
        const dropdown=await $('#queue_to_transfer > option:nth-child(1)')
        await dropdown.click();


    }


}
module.exports = new ChatBot();
