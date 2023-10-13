import { Contact } from "./@types";
import { formatContacts } from "./helpers/contatcs-format.helper";
import { formatJSON } from "./helpers/format-json.helper";
import { readJSON } from "./helpers/read-json.helper";
import { writeTable } from "./helpers/write-table.helper";

export * from "./@types";
export * from "./helpers/contatcs-format.helper";
export * from "./helpers/format-json.helper";
export * from "./helpers/read-json.helper";
export * from "./helpers/write-table.helper";

function main() {
  const raw: any = readJSON("./responses.json");
  const data: any[] = formatJSON(raw);
  const formattedContacts: Contact[] = formatContacts(data);
  writeTable(formattedContacts, "data");
  console.log(formattedContacts.length);
  console.log(formattedContacts[0]);
}

if (require.main === module) {
  main();
}
