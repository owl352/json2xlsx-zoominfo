import fs from "fs";

export function readJSON(path: string): any {
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path).toString());
  } else {
    throw Error("path dosent exist");
  }
}
