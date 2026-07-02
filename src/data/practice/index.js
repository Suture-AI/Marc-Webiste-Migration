/* Auto-collects every practice-area content module in this folder.
   Adding a new <key>.js file registers its route automatically. */
const modules = import.meta.glob("./*.js", { eager: true });

export const PRACTICE_CONTENT = Object.entries(modules)
  .filter(([file]) => !file.endsWith("/index.js"))
  .map(([, mod]) => mod.default)
  .filter(Boolean);
