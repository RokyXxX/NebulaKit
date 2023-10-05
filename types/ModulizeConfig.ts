import config from '../nebulakit.config';
import * as fs from 'fs';

const dir = './scss/config/_config.scss';
const fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

export interface NebulaKitConfig {
    customScroll: boolean,
    customSelection: boolean,
    genRtlCSS: boolean,
    customFontStyle: string,
}

if (config.customFontStyle == "") {
    config.customFontStyle = fontFamily;
}

const confVal = `//! Auto-generated file, DO NOT EDIT/DELETE.
$customScroll: ${config.customScroll};
$customSelection: ${config.customSelection};
$rtlCSS: ${config.genRtlCSS};
$fontFamily: '${config.customFontStyle}';`;

fs.writeFileSync(dir, confVal);
console.log(dir, confVal, "[NebulaKit - Information]: Configuration Build Success.");

export default NebulaKitConfig;