const BasePage = require('./BasePage');

class DragabblePage extends BasePage{

    constructor(page){

     super(page);
     this.page = page;
     this.dragSimpleTab = '#draggableExample-tab-simple';
     this.dragBox = '#dragBox';
     this.borderOfContainer = '[style*="border: 1"]';
     this.h1Text = '[class="text-center"]';

    }


}

module.exports = { DragabblePage };