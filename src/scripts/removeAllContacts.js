import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    const getContactsData = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

    console.log(`Count contacts to db: ${getContactsData.length}`);
  } catch (error) {
    console.log(error, 'Failed to read file');
  }
};

await removeAllContacts();