// TEMPLATE for NebulaKit files.

const startYear = new Date().getFullYear();
const nextYear = new Date().getFullYear() + 1;
const lastYear = new Date().getFullYear() - 1;
let version = "1.0.0";

const tsTemplate = `
/** NebulaKit - ts (TypeScript)
 * @authors The NebulaKit Developer(s) ${startYear}-${nextYear}
 * @version ${version}
 * **/
`;

const scssTemplate = `
/** NebulaKit - scss (SCSS)
 * @authors The NebulaKit Developer(s) ${startYear}-${nextYear}
 * @version ${version}
 * **/
`;