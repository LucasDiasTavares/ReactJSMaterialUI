const KEYS = {
  sheets: "sheets",
  sheetID: "sheetID",
};

export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

export function insertSheet(data) {
  let sheets = getAllSheets();
  data["id"] = sheets.push(data);
  console.log(data)
  localStorage.setItem(KEYS.sheets, JSON.stringify(sheets));
}

export function updateSheet(data) {
  let sheets = getAllSheets();
  let recordIndex = sheets.findIndex((x) => x.id === data.id);
  sheets[recordIndex] = { ...data };
  localStorage.setItem(KEYS.sheets, JSON.stringify(sheets));
}

export function deleteSheet(id) {
  let sheets = getAllSheets();
  sheets = sheets.filter((x) => x.id !== id);
  localStorage.setItem(KEYS.sheets, JSON.stringify(sheets));
}

export function generateSheetId() {
  if (localStorage.getItem(KEYS.sheetID) === null)
    localStorage.setItem(KEYS.sheetID, "0");
  var id = parseInt(localStorage.getItem(KEYS.sheetID));
  localStorage.setItem(KEYS.sheetID, (++id).toString());
  return id;
}

export function getAllSheets() {
  if (localStorage.getItem(KEYS.sheets) === null)
    localStorage.setItem(KEYS.sheets, JSON.stringify([]));
  let sheets = JSON.parse(localStorage.getItem(KEYS.sheets));
  return sheets.map((x) => ({
    ...x,
  }));
}
