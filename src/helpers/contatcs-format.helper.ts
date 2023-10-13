import { Contact } from "../@types";

export function formatContacts(contacts: any): Contact[] {
  let out: Array<any> = [];
  for (let i: number = 0; i < contacts.length; i++) {
    out.push({
      name: contacts[i]["name"] != undefined ? contacts[i]["name"] : "",
      jobTitle:
        contacts[i]["jobTitle"] != undefined ? contacts[i]["jobTitle"] : "",
      email: contacts[i]["email"] != undefined ? contacts[i]["email"] : "",
      phone: contacts[i]["phone"] != undefined ? contacts[i]["phone"] : "",
      mobilePhone:
        contacts[i]["mobilePhone"] != undefined
          ? contacts[i]["mobilePhone"]
          : "",
      companyPhone:
        contacts[i]["companyPhone"] != undefined
          ? contacts[i]["companyPhone"]
          : "",
      companyAddress:
        contacts[i]["companyAddress"] != undefined
          ? contacts[i]["companyAddress"]["State"] +
            contacts[i]["companyAddress"]["City"] +
            contacts[i]["companyAddress"]["Street"]
            ? contacts[i]["companyAddress"]["State"] +
              " " +
              contacts[i]["companyAddress"]["City"] +
              " " +
              contacts[i]["companyAddress"]["Street"]
            : ""
          : "",
      location:
        contacts[i]["location"] != undefined
          ? contacts[i]["location"]["State"] +
            contacts[i]["location"]["City"] +
            contacts[i]["location"]["Street"]
            ? contacts[i]["location"]["State"] +
              " " +
              contacts[i]["location"]["City"] +
              " " +
              contacts[i]["location"]["Street"]
            : ""
          : "",
    });
  }
  return out;
}
