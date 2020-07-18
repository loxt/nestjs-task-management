import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

describe('UserEntity', () => {
  let user: User;

  beforeEach(() => {
    user = new User();
    user.salt = 'testSalt';
    bcrypt.hash = jest.fn();
  });

  describe('validatePassword', () => {
    it('should return true as password is valid', function () {});
    it('should return false as password is invalid', function () {});
  });
});
