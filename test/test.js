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

    test('Response type should be an object', async(done) => {
      request(app).get('/menu').then((response) => {
        expect(typeof response).toBe('object');
        done();
      })
    })

    test('Get back error when encountering wrong endpoint', async(done) => {
      request(app).get('/menu/menu').then((response) => {
        expect(response.status).toBe(404);
        done();
      })
    })

});

describe('Test the database schema', () => {
  test('Contains correct columns', async(done) => {
    let expected = ['id', 'main_description', 'single_menu', 'price_per_guest', 'dish_name', 'dish_description', 'single_menu_id'];
    // expect.arrayContaining jest method
    request(app).get('/menu').then((response) => {
      expect(Object.keys(response)).toEqual(expect.arrayContaining(expected));
      done();
  })
})

})
