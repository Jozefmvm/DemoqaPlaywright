const BasePage = require('./BasePage');
class MainPage extends BasePage{

    constructor(page){
     super(page);
     this.page = page;
     this.logoImgHeader = 'header a img[src="/images/Toolsqa.jpg"]';
     this.elementsButton =  '//h5[contains(text(),"Elements")]';
     this.formsButton = '//h5[contains(text(),"Forms")]';
     this.alertsButton = '//h5[contains(text(),"Alerts")]';
     this.widgetsButton = '//h5[contains(text(),"Widgets")]';
     this.interactionButton = '//h5[contains(text(),"Interactions")]';
     this.bookButton = ' //h5[contains(text(),"Book")]';
    }

}

module.exports = { MainPage }