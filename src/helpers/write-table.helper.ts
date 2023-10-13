import { Contact } from "../@types";
import xlsx from "xlsx";

export function writeTable(data: Contact[], name: string) {
  const sheet = xlsx.utils.json_to_sheet(data);
  const book = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(book, sheet);
  xlsx.writeFile(book, "./" + name + ".xlsx");
}
