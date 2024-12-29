
const { test, expect } = require('@playwright/test');
const { MainPage } = require('../PageObject/MainPage');
const mainpage = new MainPage();

test.beforeEach(async ({ page }, testInfo) => {

  testInfo.setTimeout(testInfo.timeout + 60_000);
  await page.goto('https://demoqa.com/');
  
  });

test.describe('MainPageTesting', () =>{

  test('Should be appropriate title after going to demoqa.com', async ({ page }) => {

    await expect(page).toHaveTitle('DEMOQA');

  })

  test('Should be visible logos', async ({ page }) => {

    const logo = page.locator(mainpage.logoImgHeader);
    await expect(logo).toBeVisible();

  })


  

})