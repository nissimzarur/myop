import * as fs from "fs";

export default function () {
  try {
    const data = fs.readFileSync(String(process.env.DB_FILE), "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading tickets file:", err);
    return [];
  }
}
