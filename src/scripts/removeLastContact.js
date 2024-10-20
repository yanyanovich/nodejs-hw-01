import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    data.pop();
    writeContacts(data);
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
