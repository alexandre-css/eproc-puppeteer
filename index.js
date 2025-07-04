const puppeteer = require("puppeteer-core");

(async () => {
    const browser = await puppeteer.connect({
        browserURL: "http://localhost:9222",
        defaultViewport: null,
    });
    const pages = await browser.pages();
    const page = pages[0];
    await page.evaluate(() => {
        document.body.style.zoom = "100%";
    });
    await page.waitForSelector(
        'a.infraLegendObrigatorio[title="Novo Lembrete"]'
    );
    await page.click('a.infraLegendObrigatorio[title="Novo Lembrete"]');
    await browser.disconnect();
})();
