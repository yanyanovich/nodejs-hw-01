import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  try {
    const data = await readContacts();
    const newData = [];
    for (let i = 0; i < number; i++) {
      newData.push(createFakeContact());
    }
    const newDataArr = [...data, ...newData];
    await writeContacts(newDataArr, undefined, 2);
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
