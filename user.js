import { Weavy } from 'weavy-js';

const weavy = new Weavy({
  appKey: 'wys_7RqZlPxycruoitgvY8vfw9amgctP0q1lDe00',
});

async function createUser() {
  try {
    const user = await weavy.data.users.create({
      data: {
        name: 'Janith',
        email: 'janithnanayakkara0202@gmail.com',
      },
    });

    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}