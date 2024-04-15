import puppeteer from "puppeteer";


describe("start", () => {
    let browser;
    let page;
    const url = 'http://localhost:9000';

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 250,
            devtools: true,
        });
        page = await browser.newPage();
    });

    test("open browser", async () => {
        await page.goto(url);
        await page.waitForSelector('ul');
    });

    afterAll(async () => {
        await browser.close();
    });
});
