const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:3040/menu';

const app = require('../server/index.js');
const request = require('supertest');


let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });
  afterAll(() => {
    browser.close();
  });

  describe('Test the root path', () => {
    test('GET route is successful', async(done) => {
      request(app).get('/menu').then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
});