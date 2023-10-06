import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Suhas m',
    email: 'suhas@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
 
