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



  });