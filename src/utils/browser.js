const puppeteer = require('puppeteer');

async function launchBrowser() {
    const browser = await puppeteer.launch({ headless: false });
    return browser;
}

async function openPage(browser, url) {
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}

async function fillForm(page, selector, data) {
    await page.waitForSelector(selector);
    await page.type(selector, data);
}

async function captureData(page, selector) {
    await page.waitForSelector(selector);
    const data = await page.$eval(selector, el => el.innerText);
    return data;
}

module.exports = {
    launchBrowser,
    openPage,
    fillForm,
    captureData
};