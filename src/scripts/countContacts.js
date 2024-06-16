import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(PATH_DB, 'utf-8')).length;
  } catch (error) {
    console.log(error, 'Failed to read file');
  }
};

console.log(`Count contacts to db: ${await countContacts()}`);