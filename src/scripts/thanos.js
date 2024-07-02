import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const getContactsData = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    for (let i = 0; i < getContactsData.length; i += 1) {
      const randTanos = Math.random();
      if (randTanos > 0.5) {
        getContactsData.splice(i, 1);
        i -= 1;
      }
    }
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(getContactsData, null, 2),
      'utf-8',
    );
    console.log(`Count contacts to db: ${getContactsData.length}`);
  } catch (error) {
    console.log(error, 'Failed to read file');
  }
};

await thanos();
