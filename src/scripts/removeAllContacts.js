import { writeContacts } from "../utils/writeContacts.js";
export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (error) {
    console.log(error.message);
  }
};

removeAllContacts();
