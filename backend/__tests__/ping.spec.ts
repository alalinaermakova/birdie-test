import app from '../src/application'
import * as request from 'supertest';

describe('api should return response', () => {
  it('/events', async () => {
    await request(app)
      .get('/events')
      .expect(200)
  })
});
