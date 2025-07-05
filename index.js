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
    const frameHandle = await page.waitForSelector("#ifrSubFrm");
    const frame = await frameHandle.contentFrame();
    const txaDescricao = await frame.waitForSelector("#txaDescricao");
    await txaDescricao.evaluate((el) => (el.value = "TEMA 1184"));
    await txaDescricao.evaluate((el) => el.dispatchEvent(new Event("input")));
    const btnSalvar = await frame.waitForSelector("#sbmSalvar");
    await btnSalvar.click();
    await browser.disconnect();
})();
