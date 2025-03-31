import { loginUser } from '../src/controllers/userController.js';
import User from '../src/models/User.js';

jest.mock('../src/models/User.js');

describe('User Authentication', () => {
  const req = { body: { email: 'test@example.com', password: 'password123' } };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  it('should return 400 for invalid credentials', async () => {
    // Simulate no user found
    User.findOne.mockResolvedValue(null);
    await loginUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
