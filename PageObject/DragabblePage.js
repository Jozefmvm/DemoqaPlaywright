const BasePage = require('./BasePage');

class DragabblePage extends BasePage{

    constructor(page){

     super(page);
     this.page = page;
     this.dragSimpleTab = '#draggableExample-tab-simple';
     this.dragBox = '#dragBox';
     this.borderOfContainer = '[style*="border: 1"]';
     this.h1Text = '[class="text-center"]';
     this.dragAxisTab ='#draggableExample-tab-axisRestriction';
     this.onlyXBox = '#restrictedX';
     this.onlyYBox = '#restrictedY';
     this.dragContainerTab = '#draggableExample-tab-containerRestriction';
     this.containedBox = '[class="draggable ui-widget-content ui-draggable ui-draggable-handle"]';
     this.containedBoxText = '[class="ui-widget-header ui-draggable ui-draggable-handle"]';
     this.bigContainer = '#containmentWrapper';
     this.containerText = '[class="draggable ui-widget-content m-3"]';
     this.dragCursorTab = '#draggableExample-tab-cursorStyle';
     this.centerBox = '#cursorCenter';
     this.topLeftBox = '#cursorTopLeft';
     this.buttomBox = '#cursorBottom';

    }

    async dragDrop(page, originSelector, destinationSelector) {

    const originElement = await page.waitForSelector(originSelector);
    const destinationElement = await page.waitForSelector(destinationSelector);
    await originElement.hover();
    await page.mouse.down();
    const box = (await destinationElement.boundingBox());
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await destinationElement.hover();
    await page.mouse.up();
    
    }


}

module.exports = { DragabblePage };