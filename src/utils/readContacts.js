import * as fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: "utf8" });
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};
