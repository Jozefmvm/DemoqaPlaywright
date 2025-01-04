
const { test, expect } = require('@playwright/test');
const { DroppablePage } = require('../PageObject/DroppablePage');
const { ADDRGETNETWORKPARAMS } = require('dns');
const droppablePage = new DroppablePage();



test.beforeEach(async ({ page }, testInfo) => {

  testInfo.setTimeout(testInfo.timeout + 60_000);
  await page.goto('https://demoqa.com/droppable');
  
  });

test.describe('Droppable page testing', () =>{

  test('Should be appropriate background-color and word in droppablecontainer after dropping draggablecotainer (simple)', async ({ page }) => {

    await page.locator(droppablePage.draggableContainer).hover();
    await page.mouse.down();
    await page.locator(droppablePage.droppableContainer).hover();
    await page.mouse.up();
    const droppableContainer = page.locator(droppablePage.droppableContainer);
    await expect (droppableContainer).toHaveCSS('background-color','rgb(70, 130, 180)');
    await expect (droppableContainer).toHaveText('Dropped!');

  });


  test('Should be appropriate background-color and word in droppablecontainer after dropping acceptable box (Accept)',async({page})=>{

   const acceptTab = page.locator(droppablePage.acceptTab);
   await acceptTab.click();
   await page.locator(droppablePage.acceptableBox).hover();
   await page.mouse.down();
   await page.locator(droppablePage.acceptDropContainer).hover()
   await page.mouse.up();
   const acceptDropContainer = page.locator(droppablePage.acceptDropContainer);
   await expect(acceptDropContainer).toHaveCSS('background-color','rgb(70, 130, 180)');
   await expect (acceptDropContainer).toHaveText('Dropped!');
   
  } );


  test('Should be appropriate background-color and word in droppablecontainer after hovering with acceptable box (Accept)',async({page})=>{

    const acceptTab = page.locator(droppablePage.acceptTab);
    await acceptTab.click();
    await page.locator(droppablePage.acceptableBox).hover();
    await page.mouse.down();
    await page.locator(droppablePage.acceptDropContainer).hover();
    await page.mouse.down();
    const acceptDropContainer = page.locator(droppablePage.acceptDropContainer);
    await expect(acceptDropContainer).toHaveCSS('background-color','rgb(60, 179, 113)');
    await expect(acceptDropContainer).toHaveText('Drop here');
    
   } );


  test('Should be appropriate background-color and word in droppablecontainer after dropping notacceptable box (Accept)',async({page})=>{

    const acceptTab = page.locator(droppablePage.acceptTab);
    await acceptTab.click();
    await page.locator(droppablePage.notAcceptableBox).hover();
    await page.mouse.down();
    await page.locator(droppablePage.acceptDropContainer).hover();
    await page.mouse.up();
    const acceptDropContainer = page.locator(droppablePage.acceptDropContainer);
    await expect(acceptDropContainer).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    await expect (acceptDropContainer).toHaveText('Drop here');
    
   } );


});