import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

function removeLastContact() {
    const dbPath = PATH_DB.join(__dirname, '../db/db.json');

    fs.readFile(PATH_DB, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        let contacts;
        try {
            contacts = JSON.parse(data);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            return;
        }

        if (contacts.length > 0) {
            contacts.pop();

            fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing to the file:', err);
                    return;
                }
                console.log('Last contact removed successfully!');
            });
        } else {
            console.log('No contacts to remove.');
        }
    });
}

removeLastContact();

