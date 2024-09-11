import request from 'supertest';
import app from '../src/app';

describe('Testing default route', () => {
    it("Should return 200 status code", async () => {
        const response = await request(app).get('/');
        expect (response.status).toBe(200);
    });

    it("Should return 'Hello World!'", async () => {
        const response = await request(app).get('/');
        expect (response.text).toBe('Hello World!');
    });
});
