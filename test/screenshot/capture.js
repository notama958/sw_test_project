
const screenShot=async (index)=>{
    await browser.saveScreenshot(`./test/images/screen-${index}.png`);
}
module.exports=screenShot;