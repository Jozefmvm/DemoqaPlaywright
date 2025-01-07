const { test, expect } = require('@playwright/test');
const { DragabblePage } = require('../PageObject/DragabblePage');
const dragabblePage = new DragabblePage();

test.beforeEach(async ({ page }, testInfo) => {

    testInfo.setTimeout(testInfo.timeout + 120_000);
    await page.goto('https://demoqa.com/dragabble');
  
    });
  
  test.describe('Dragabble page testing', () =>{
  
  
    test('Should be appropriate position of box after dragging (simple)', async ({ page }) => {
  
      await page.locator(dragabblePage.dragBox).dragTo(page.locator(dragabblePage.h1Text));
      const dragBox = page.locator(dragabblePage.dragBox);
      await expect(dragBox).toHaveAttribute('style','position: relative; left: 385px; top: -140px;');
  
    });


    test('Should be appropriate position of Xbox after moving along X axis(Axis)', async ({ page }) => {
  
      const axisTab = page.locator(dragabblePage.dragAxisTab);
      await axisTab.click();
      await dragabblePage.dragDrop(page, dragabblePage.onlyXBox, dragabblePage.onlyYBox);
      const onlyXBox = page.locator(dragabblePage.onlyXBox);
      await expect(onlyXBox).toHaveAttribute('style','position: relative; left: 345px; top: 0px;');
  
    });


    test('Should be appropriate position of Ybox after moving along y axis(Axis)', async ({ page }) => {
  
      const axisTab = page.locator(dragabblePage.dragAxisTab);
      await axisTab.click();
      await dragabblePage.dragDrop(page, dragabblePage.onlyYBox, dragabblePage.h1Text);
      const onlyYBox = page.locator(dragabblePage.onlyYBox);
      await expect(onlyYBox).toHaveAttribute('style','position: relative; left: 0px; top: -164px;');
  
    });


    test('Should be appropriate position of Xbox after moving along Y axis(Axis)', async ({ page }) => {
  
      const axisTab = page.locator(dragabblePage.dragAxisTab);
      await axisTab.click();
      await dragabblePage.dragDrop(page, dragabblePage.onlyXBox, dragabblePage.h1Text);
      const onlyXBox = page.locator(dragabblePage.onlyXBox);
      await expect(onlyXBox).not.toHaveAttribute('style','position: relative; left: 345px; top: 0px;');
  
    });


    test('Should be appropriate position of Ybox after moving along x axis(Axis)', async ({ page }) => {
  
      const axisTab = page.locator(dragabblePage.dragAxisTab);
      await axisTab.click();
      await dragabblePage.dragDrop(page, dragabblePage.onlyYBox, dragabblePage.onlyXBox);
      const onlyYBox = page.locator(dragabblePage.onlyYBox);
      await expect(onlyYBox).not.toHaveAttribute('style','position: relative; left: 0px; top: -164px;');
  
    });


    test('Should be appropriate position of contained box after moving into center of big container axis(Container)', async ({ page }) => {
  
      const dragcontainerTab = page.locator(dragabblePage.dragContainerTab);
      await dragcontainerTab.click();
      await page.locator(dragabblePage.containedBox).dragTo(page.locator(dragabblePage.bigContainer))
      const containedBox = page.locator(dragabblePage.containedBox);
      await expect(containedBox).toHaveAttribute('style','position: relative; left: 343px; top: 59px;');
  
    });


    test('Should be appropriate position of contained text after moving into center of text container axis(Container)', async ({ page }) => {
  
      const dragcontainerTab = page.locator(dragabblePage.dragContainerTab);
      await dragcontainerTab.click();
      await page.locator(dragabblePage.containedBoxText).dragTo(page.locator(dragabblePage.containerText))
      const containedBoxText = page.locator(dragabblePage.containedBoxText);
      await expect(containedBoxText).toHaveAttribute('style','position: relative; left: 14.2px; top: 55px;');
  
    });




  });