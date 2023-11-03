const connection = require('../config/connection');
const { User, Thought } = require('../models');

const users = [
  {
    username: 'Becky',
    email: 'beckywild@gmail.com',
  },
  {
    username: 'Letty',
    email: 'lettybetty@gmail.com',
  },
  {
    username: 'Dom',
    email: 'domtheman@gmail.com',
  },
]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    await User.collection.insertMany(users);

    console.info('Seeding done');
    process.exit(0);
  });