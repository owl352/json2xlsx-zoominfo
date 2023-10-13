export function formatJSON(json: any): Array<any> {
  let out: any[] = [];
  json.forEach((element: any) => {
    out.push(JSON.parse(element.data));
  });
  return out;
}
