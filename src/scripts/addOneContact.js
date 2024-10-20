import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    const newDataArr = [...data, createFakeContact()];
    await writeContacts(newDataArr, undefined, 2);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
