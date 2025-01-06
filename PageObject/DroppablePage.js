const BasePage = require('./BasePage');
class DroppablePage extends BasePage{

    constructor(page){

     super(page);
     this.page = page;
     this.draggableContainer = '[class="simple-drop-container"] #draggable';
     this.droppableContainer = '[class="simple-drop-container"] #droppable';
     this.simpleTab = '[class="nav nav-tabs"] #droppableExample-tab-simple';
     this.acceptTab = '[class="nav nav-tabs"] #droppableExample-tab-accept';
     this.preventPropogationTab = '[class="nav nav-tabs"] #droppableExample-tab-preventPropogation';
     this.revertDraggableTab = '[class="nav nav-tabs"] #droppableExample-tab-revertable';
     this.acceptableBox = '[class="accept-drop-container"] #acceptable';
     this.notAcceptableBox = '[class="accept-drop-container"] #notAcceptable';
     this.acceptDropContainer = '[class="accept-drop-container"] #droppable';
     this.preventDragBox = '[class="pp-drop-container"] #dragBox';
     this.preventOuterDropContainerUpper = '#notGreedyDropBox';
     this.preventOuterDropContainerUpperInside = '#notGreedyDropBox #notGreedyInnerDropBox';
     this.preventOuterDropContainerLower = '#greedyDropBox';
     this.preventOuterDropContainerLowerInside = '#greedyDropBox #greedyDropBoxInner';
     this.willReventBox = '#revertable';
     this.notReventBox = '#notRevertable';
     this.reventDropContainer = '[class="revertable-drop-container"] [class*="drop-box ui-droppable"]';

    }


}

module.exports = { DroppablePage };