
const { test, expect } = require('@playwright/test');
const { DroppablePage } = require('../PageObject/DroppablePage');
const { ADDRGETNETWORKPARAMS } = require('dns');
const droppablePage = new DroppablePage();



test.beforeEach(async ({ page }, testInfo) => {

  testInfo.setTimeout(testInfo.timeout + 120_000);
  await page.goto('https://demoqa.com/droppable');

  });

test.describe('Droppable page testing', () =>{


  test('Should be appropriate background-color and word in container after dropping draggablecotainer (simple)', async ({ page }) => {

    await page.locator(droppablePage.draggableContainer).dragTo(page.locator(droppablePage.droppableContainer));
    const droppableContainer = page.locator(droppablePage.droppableContainer);
    await expect (droppableContainer).toHaveCSS('background-color','rgb(70, 130, 180)');
    await expect (droppableContainer).toHaveText(/Dropped!/);

  });


  test('Should be appropriate background-color and word in container after dropping acceptable box (Accept)',async({page})=>{

   const acceptTab = page.locator(droppablePage.acceptTab);
   await acceptTab.click();
   await page.locator(droppablePage.acceptableBox).dragTo(page.locator(droppablePage.acceptDropContainer));
   const acceptDropContainer = page.locator(droppablePage.acceptDropContainer);
   await expect(acceptDropContainer).toHaveCSS('background-color','rgb(70, 130, 180)');
   await expect (acceptDropContainer).toHaveText(/Dropped!/);
   
  } );


  test('Should be appropriate background-color and word in container after hovering with acceptable box (Accept)',async({page})=>{

    const acceptTab = page.locator(droppablePage.acceptTab);
    await acceptTab.click();
    await page.locator(droppablePage.acceptableBox).hover();
    await page.mouse.down();
    await page.locator(droppablePage.acceptDropContainer).hover();
    const acceptDropContainer = page.locator(droppablePage.acceptDropContainer);
    await expect(acceptDropContainer).toHaveCSS('background-color','rgb(60, 179, 113)');
    await expect(acceptDropContainer).toHaveText(/Drop here/);
    
   } );


  test('Should be appropriate background-color and word in container after dropping notacceptable box (Accept)',async({page})=>{

    const acceptTab = page.locator(droppablePage.acceptTab);
    await acceptTab.click();
    await page.locator(droppablePage.notAcceptableBox).dragTo(page.locator(droppablePage.acceptDropContainer));
    const acceptDropContainer = page.locator(droppablePage.acceptDropContainer);
    await expect(acceptDropContainer).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    await expect (acceptDropContainer).toHaveText(/Drop here/);
    
   } );


   test('Should be appropriate background-color and word in upper container  after catching the box (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.locator(droppablePage.preventDragBox).hover();
    await page.mouse.down();
    await page.mouse.move(530,430);
    const preventOuterDropContainerUpper = page.locator(droppablePage.preventOuterDropContainerUpper);
    await expect(preventOuterDropContainerUpper).toHaveCSS('background-color','rgb(60, 179, 113)');
    await expect (preventOuterDropContainerUpper).toHaveText(/Outer droppable/);
    
   } );


   test('Should be appropriate background-color and word in  lower container after catching the box (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.locator(droppablePage.preventDragBox).hover();
    await page.mouse.down();
    await page.mouse.move(530,430);
    const preventOuterDropContainerLower = page.locator(droppablePage.preventOuterDropContainerLower);
    await expect(preventOuterDropContainerLower).toHaveCSS('background-color','rgb(60, 179, 113)');
    await expect (preventOuterDropContainerLower).toHaveText(/Outer droppable/);
    
   } );


   test('Should be appropriate background-color and word in upper container  after aiming the box into zone inside upper container (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.locator(droppablePage.preventDragBox).dragTo(page.locator(droppablePage.preventOuterDropContainerUpper),
    {sourcePosition: { x: 0, y: 0 },
    targetPosition: { x: 0, y: 0 },});
    const preventOuterDropContainerUpper = page.locator(droppablePage.preventOuterDropContainerUpper);
    await expect(preventOuterDropContainerUpper).toHaveCSS('background-color','rgb(70, 130, 180)');
    await expect (preventOuterDropContainerUpper).toHaveText(/Dropped!/);
    
   } );


   test('Should be appropriate background-color and word in upper container  after aiming the box into zone of upper inner container (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.locator(droppablePage.preventDragBox).dragTo(page.locator(droppablePage.preventOuterDropContainerUpperInside),
    {sourcePosition: { x: 0, y: 0 },
    targetPosition: { x: 0, y: 0 },});
    const preventOuterDropContainerUpperInside = page.locator(droppablePage.preventOuterDropContainerUpperInside);
    await expect(preventOuterDropContainerUpperInside).toHaveCSS('background-color','rgb(70, 130, 180)');
    await expect (preventOuterDropContainerUpperInside).toHaveText(/Dropped!/);
    
   } );


   test('Should be appropriate background-color and word in lower container  after aiming the box into zone inside lower container (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.locator(droppablePage.preventDragBox).dragTo(page.locator(droppablePage.preventOuterDropContainerLower),
    {sourcePosition: { x: 0, y: 0 },
    targetPosition: { x: 0, y: 0 },});
    const preventOuterDropContainerLower = page.locator(droppablePage.preventOuterDropContainerLower);
    await expect(preventOuterDropContainerLower).toHaveCSS('background-color','rgb(70, 130, 180)');
    await expect (preventOuterDropContainerLower).toHaveText(/Dropped!/);
    
   } );


   test('Should be appropriate background-color and word in lower container  after aiming the box into zone of lower inner container (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.locator(droppablePage.preventDragBox).dragTo(page.locator(droppablePage.preventOuterDropContainerLowerInside),
    {sourcePosition: { x: 0, y: 0 },
    targetPosition: { x: 0, y: 0 },});
    const preventOuterDropContainerLowerInside = page.locator(droppablePage.preventOuterDropContainerLowerInside);
    await expect(preventOuterDropContainerLowerInside).toHaveCSS('background-color','rgb(70, 130, 180)');
    await expect (preventOuterDropContainerLowerInside).toHaveText(/Dropped!/);
    
   } );


   test('Should be appropriate background-color and word in upper container  after pointing the box into zone of upper container (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.locator(droppablePage.preventDragBox).hover();
    await page.mouse.down();
    await page.locator(droppablePage.preventOuterDropContainerUpper).hover()
    const preventOuterDropContainerUpper = page.locator(droppablePage.preventOuterDropContainerUpper);
    await expect(preventOuterDropContainerUpper).toHaveCSS('background-color','rgb(143, 188, 143)');
    await expect (preventOuterDropContainerUpper).toHaveText(/Outer droppable/);
    
   } );


   test('Should be appropriate background-color and word in upper container  after pointing the box inside upper container (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.locator(droppablePage.preventDragBox).hover();
    await page.mouse.down();
    await page.locator(droppablePage.preventOuterDropContainerUpperInside).hover()
    const preventOuterDropContainerUpperInside = page.locator(droppablePage.preventOuterDropContainerUpperInside);
    await expect(preventOuterDropContainerUpperInside).toHaveCSS('background-color','rgb(143, 188, 143)');
    await expect (preventOuterDropContainerUpperInside).toHaveText(/Inner droppable/);
    
   } );


   test('Should be appropriate background-color and word in lower container  after pointing the box into zone ofinner lower container (Prevent)',async({page})=>{

    const preventTab = page.locator(droppablePage.preventPropogationTab);
    await preventTab.click();
    await page.mouse.wheel(0, 100);
    await page.locator(droppablePage.preventDragBox).hover();
    await page.mouse.down();
    await page.locator(droppablePage.preventOuterDropContainerLowerInside).hover();
    const preventOuterDropContainerLowerInside = page.locator(droppablePage.preventOuterDropContainerLowerInside);
    await expect(preventOuterDropContainerLowerInside).toHaveCSS('background-color','rgb(143, 188, 143)');
    await expect (preventOuterDropContainerLowerInside).toHaveText("Inner droppable (greedy)");
    
   } );


   test('Should be appropriate background-color and word in  container  after hovering the willreventbox into zone of one (Revent)',async({page})=>{

    const reventTab = page.locator(droppablePage.revertDraggableTab);
    await reventTab.click();
    await page.locator(droppablePage.willReventBox).hover();
    await page.mouse.down();
    await page.locator(droppablePage.reventDropContainer).hover();
    const reventDropContainer = page.locator(droppablePage.reventDropContainer);
    await expect(reventDropContainer).toHaveCSS('background-color','rgb(143, 188, 143)');
    await expect (reventDropContainer).toHaveText(/Drop here/);
    
   } );


   test('Should be appropriate background-color and word in  container  after hovering the notreventbox into zone of one (Revent)',async({page})=>{

    const reventTab = page.locator(droppablePage.revertDraggableTab);
    await reventTab.click();
    await page.locator(droppablePage.notReventBox).hover();
    await page.mouse.down();
    await page.locator(droppablePage.reventDropContainer).hover();
    const reventDropContainer = page.locator(droppablePage.reventDropContainer);
    await expect(reventDropContainer).toHaveCSS('background-color','rgb(143, 188, 143)');
    await expect (reventDropContainer).toHaveText(/Drop here/);
    
   } );


  test('Should be appropriate background-color and word in  container  after dropping the willreventbox into zone of one (Revent)',async({page})=>{

    const reventTab = page.locator(droppablePage.revertDraggableTab);
    await reventTab.click();
    await page.locator(droppablePage.willReventBox).dragTo(page.locator(droppablePage.reventDropContainer));
    const reventDropContainer = page.locator(droppablePage.reventDropContainer);
    const willReventBox = page.locator(droppablePage.willReventBox);
    await expect(reventDropContainer).toHaveCSS('background-color','rgb(70, 130, 180)');
    await expect (reventDropContainer).toHaveText(/Dropped!/);
    await expect(willReventBox).toHaveAttribute('style','position: relative; left: 0px; top: 0px;');
    
   } );


   test('Should be appropriate position of willrevent box  after dropping this into container (Revent)',async({page})=>{

    const reventTab = page.locator(droppablePage.revertDraggableTab);
    await reventTab.click();
    await page.locator(droppablePage.willReventBox).dragTo(page.locator(droppablePage.reventDropContainer));
    const willReventBox = page.locator(droppablePage.willReventBox);
    await expect(willReventBox).toHaveAttribute('style','position: relative; left: 0px; top: 0px;');
    
   } );


  test('Should be appropriate position of notrevent box  after dropping this into container (Revent)',async({page})=>{

    const reventTab = page.locator(droppablePage.revertDraggableTab);
    await reventTab.click();
    await page.locator(droppablePage.notReventBox).dragTo(page.locator(droppablePage.reventDropContainer));
    const notReventBox = page.locator(droppablePage.notReventBox);
    await expect(notReventBox).toHaveAttribute('style','position: relative; left: 356px; top: -17px;');
    
   } );


   test('Should be appropriate position of notrevent box  after dropping this into container and after throwing out box (Revent)',async({page})=>{

    const reventTab = page.locator(droppablePage.revertDraggableTab);
    await reventTab.click();
    await page.locator(droppablePage.notReventBox).dragTo(page.locator(droppablePage.reventDropContainer));
    await page.locator(droppablePage.notReventBox).hover();
    await page.mouse.down();
    await page.mouse.move(650, 200);
    const notReventBox = page.locator(droppablePage.notReventBox);
    await expect(notReventBox).toHaveAttribute('style','position: relative; left: 356px; top: -17px;');
    
   } );



});