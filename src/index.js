const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('URL_DO_EPROC'); // Substitua pela URL do eproc

    // Adicione aqui o código necessário para interagir com o eproc

    await browser.close();
})();